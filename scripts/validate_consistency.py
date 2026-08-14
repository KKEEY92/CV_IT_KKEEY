#!/usr/bin/env python3
"""
KKEEY Portfolio Consistency & Anti-Regression Validator
Ensures that all files strictly comply with the Canonical Single Source of Truth,
blocking legacy URLs, obsolete employer names, and out-of-sync credentials.
"""

import os
import sys
from pathlib import Path

FORBIDDEN_PATTERNS = [
    ("github.com/kevin-kuck", "Legacy GitHub URL - use github.com/KKEEY92"),
    ("linkedin.com/in/kevin-kuck/", "Legacy LinkedIn URL - use linkedin.com/in/kevin-kuck-it/"),
    ("in meiner aktuellen Tätigkeit bei den Johannitern", "Outdated active employment phrasing"),
    ("Bundes-IT · Johanniter-Unfall-Hilfe e.V.", "Outdated company naming - use Johanniter Bundes-IT Services"),
    ("15+ Jahre IT-Systemintegration", "Use '15 Jahre operative Erfahrung'"),
    ("sunrisekk199228@googlemail.com", "Legacy email - use kuck_kevin@icloud.com"),
]

PROJECT_ROOT = Path(__file__).parent.parent

CHECK_EXTENSIONS = {'.html', '.js', '.json', '.md', '.py'}
EXCLUDE_DIRS = {'.git', 'node_modules', '__pycache__', 'backup', 'archive'}
EXCLUDE_FILES = {'validate_consistency.py'}


def validate_repository() -> bool:
    print("Running Portfolio Consistency & Anti-Regression Scan...")
    violations = []

    for root, dirs, files in os.walk(PROJECT_ROOT):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        for file in files:
            if file in EXCLUDE_FILES or 'backup' in file:
                continue
            file_path = Path(root) / file
            if file_path.suffix not in CHECK_EXTENSIONS:
                continue

            try:
                content = file_path.read_text(encoding='utf-8')
                for pattern, reason in FORBIDDEN_PATTERNS:
                    if pattern in content:
                        violations.append((file_path.relative_to(PROJECT_ROOT), pattern, reason))
            except Exception as e:
                print(f"Warning: Could not read {file_path}: {e}", file=sys.stderr)

    if violations:
        print(f"\n❌ Consistency scan failed with {len(violations)} violation(s):", file=sys.stderr)
        for path, pattern, reason in violations:
            print(f"  • {path}: Found '{pattern}' -> {reason}", file=sys.stderr)
        return False

    print("✓ All files pass canonical Single Source of Truth validation.")
    return True


if __name__ == '__main__':
    if not validate_repository():
        sys.exit(1)
    sys.exit(0)
