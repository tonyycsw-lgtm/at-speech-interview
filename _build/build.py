import io, os

BASE = r"C:\C_Drive Documents\Github - HTML - 中小學教學應用\AT-SPEECH\升中面試班"
parts = []
for n in ["d1.js", "d2.js", "d3.js", "d4.js", "d5.js", "d6.js", "d7.js", "d8.js", "d9.js", "d10.js", "d11.js", "d12.js"]:
    with io.open(os.path.join(BASE, "_build", n), encoding="utf-8") as f:
        parts.append(f.read())
data = "\r\n\r\n".join(parts)
with io.open(os.path.join(BASE, "js", "data.js"), "w", encoding="utf-8", newline="") as f:
    f.write(data)
print("data.js", len(data), "bytes /", len(parts), "parts")
