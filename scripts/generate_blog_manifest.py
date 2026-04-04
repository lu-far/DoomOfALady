#!/usr/bin/env python3
"""Build blogs/posts.json by scanning HTML files in blogs/."""

from __future__ import annotations

import json
import re
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BLOG_DIR = ROOT / "blogs"
OUTPUT = BLOG_DIR / "posts.json"

META_PATTERN = re.compile(r'<meta\s+name="(?P<name>[^"]+)"\s+content="(?P<value>[^"]*)"\s*/?>', re.IGNORECASE)


def parse_meta(html_text: str) -> dict[str, str]:
    data: dict[str, str] = {}
    for match in META_PATTERN.finditer(html_text):
        data[match.group("name").strip()] = match.group("value").strip()
    return data


def to_display_date(date_iso: str) -> str:
    try:
        parsed = datetime.strptime(date_iso, "%Y-%m-%d")
        return parsed.strftime("%B %d, %Y")
    except ValueError:
        return date_iso


def collect_posts() -> list[dict[str, str]]:
    posts: list[dict[str, str]] = []

    for file_path in sorted(BLOG_DIR.glob("*.html")):
        if file_path.name == "index.html":
            continue

        html_text = file_path.read_text(encoding="utf-8")
        meta = parse_meta(html_text)

        title = meta.get("post-title", file_path.stem.replace("-", " ").title())
        date_iso = meta.get("post-date", "1970-01-01")
        read_time = meta.get("post-read-time", "5 min read")
        summary = meta.get("post-summary", "No summary provided yet.")

        posts.append(
            {
                "title": title,
                "date": date_iso,
                "displayDate": to_display_date(date_iso),
                "readTime": read_time,
                "summary": summary,
                "path": f"blogs/{file_path.name}",
            }
        )

    posts.sort(key=lambda item: item.get("date", "1970-01-01"), reverse=True)
    return posts


def main() -> None:
    if not BLOG_DIR.exists():
        raise SystemExit("blogs directory does not exist")

    posts = collect_posts()
    OUTPUT.write_text(json.dumps(posts, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {OUTPUT} with {len(posts)} post(s).")


if __name__ == "__main__":
    main()
