""" =========================================================================
gen_edge_tts.py — 用 Edge TTS（en-GB-SoniaNeural）把 audio_map.json 中的
朗讀文本合成 MP3，輸出到 audio/<key>_Sonia.mp3。

用法（在專案根目錄）：
    .\\.venv\\Scripts\\python.exe _build\\gen_edge_tts.py
    .\\.venv\\Scripts\\python.exe _build\\gen_edge_tts.py --only P02_EN_01

相依：edge-tts（已裝入 .venv）。文本對應表由 dump_audio_map.js 產生。
========================================================================= """
import asyncio
import json
import pathlib
import sys

import edge_tts

BASE = pathlib.Path(__file__).resolve().parent.parent
MAP_PATH = BASE / "_build" / "audio_map.json"
AUDIO_DIR = BASE / "audio"
VOICE = "en-GB-SoniaNeural"
RATE = "-20%"  # 與課件 TTS rate 0.8 一致

ONLY = None
if len(sys.argv) > 2 and sys.argv[1] == "--only":
    ONLY = sys.argv[2]


async def synthesize(key: str, text: str) -> int:
    out = AUDIO_DIR / f"{key}_Sonia.mp3"
    communicate = edge_tts.Communicate(text, VOICE, rate=RATE)
    await communicate.save(str(out))
    return out.stat().st_size


async def main() -> int:
    data = json.loads(MAP_PATH.read_text(encoding="utf-8"))
    AUDIO_DIR.mkdir(exist_ok=True)
    ok = 0
    fail = []

    for key, meta in data.items():
        if ONLY and key != ONLY:
            continue
        text = (meta.get("text") or "").strip()
        if not text:
            print(f"SKIP   {key} （文本為空）")
            continue
        try:
            size = await synthesize(key, text)
            print(f"SAVED  {key}  {size} bytes")
            ok += 1
        except Exception as exc:  # noqa: BLE001
            fail.append((key, str(exc)))
            print(f"FAIL   {key}  {exc}")

    print(f"\n完成：{ok} 成功，{len(fail)} 失敗")
    return 1 if fail else 0


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
