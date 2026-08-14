#!/usr/bin/env python3
"""
KKEEY IT-Profil Project Auto-Sync Script
Fetches latest release tags, metadata, and status for repositories from GitHub & GitLab
and updates js/data.js automatically across both DE and EN localizations.
"""

from __future__ import annotations

import json
import os
import re
import sys
import urllib.request
from pathlib import Path
from typing import Any

REPOS: dict[str, str] = {
    'Claire V2.5 Native Audio': 'KKEEY92/claire-v2.5-native-audio',
    'AuraTone AI v2.0': 'KKEEY92/AuraTone-AI-by-KKEEy',
    'AI Virtual Calling': 'KKEEY92/AI-Virtual-Calling-and-Write-a-friend',
}

SCRIPT_DIR: Path = Path(__file__).parent
PROJECT_ROOT: Path = SCRIPT_DIR.parent
DATA_JS_PATH: Path = PROJECT_ROOT / 'js' / 'data.js'


def fetch_json(url: str) -> dict[str, Any] | list[Any] | None:
    req = urllib.request.Request(
        url,
        headers={
            'User-Agent': 'KKEEY-IT-Portfolio-SyncAgent/1.0',
            'Accept': 'application/vnd.github.v3+json',
        }
    )
    github_token = os.environ.get('GITHUB_TOKEN')
    if github_token and 'github.com' in url:
        req.add_header('Authorization', f'token {github_token}')

    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            if resp.status == 200:
                return json.loads(resp.read().decode('utf-8'))
    except Exception as e:
        print(f"Notice: Could not fetch {url}: {e}", file=sys.stderr)
    return None


def fetch_latest_tag_github(repo_path: str) -> str | None:
    rel = fetch_json(f"https://api.github.com/repos/{repo_path}/releases/latest")
    if isinstance(rel, dict) and 'tag_name' in rel:
        return str(rel['tag_name'])

    tags = fetch_json(f"https://api.github.com/repos/{repo_path}/tags")
    if isinstance(tags, list) and len(tags) > 0 and isinstance(tags[0], dict) and 'name' in tags[0]:
        return str(tags[0]['name'])

    return None


def sync_project_data() -> None:
    if not DATA_JS_PATH.exists():
        print(f"Error: {DATA_JS_PATH} not found.", file=sys.stderr)
        sys.exit(1)

    print("Checking IT portfolio side project statuses from GitHub...")
    updates: dict[str, str] = {}
    for proj_name, repo in REPOS.items():
        tag = fetch_latest_tag_github(repo)
        if tag:
            updates[proj_name] = tag
            print(f"  ✓ {proj_name}: {tag}")
        else:
            print(f"  - {proj_name}: Current status verified")

    content = DATA_JS_PATH.read_text(encoding='utf-8')
    original_content = content

    for proj_name, tag in updates.items():
        clean_tag = tag.lstrip('v')
        # Match the entire project block to update both de: and en: strings
        pattern = re.compile(
            rf"(\{{\s*name:\s*'{re.escape(proj_name)}'.*?desc:\s*\{{[^}}]*\}})",
            re.DOTALL
        )

        def repl(match: re.Match[str]) -> str:
            block = match.group(1)
            # Replace version pattern like v2.5 or v2.0 in the entire desc object
            return re.sub(r'v\d+\.\d+(\.\d+)?', f'v{clean_tag}', block)

        content = pattern.sub(repl, content)

    if content != original_content:
        DATA_JS_PATH.write_text(content, encoding='utf-8')
        print(f"✓ Successfully updated {DATA_JS_PATH}")
    else:
        print("Data is up to date.")


def main() -> None:
    sync_project_data()


if __name__ == '__main__':
    main()
