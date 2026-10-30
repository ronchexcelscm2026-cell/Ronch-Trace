# Two stations on one computer

Used on these PCs: **MI Line + PCBA testing**, **Ageing load + unload**, **Final testing + Packing**.
The screen is split: left half = first station, right half = second. Each half has its own operator, banner, counters and (where used) its own analyser.

## Setting up a PC (once)
1. Connect **two USB scanners**.
2. Set a **prefix** on each scanner with the "Add prefix" barcode from the scanner's manual:
   left scanner sends **L** before every code, right scanner sends **R**.
   (Different prefixes can be set under **Scanner setup** at the top of the screen.)
3. Open Ronch Trace → dashboard → **Two stations on this computer** → choose the pair.
   The PC remembers it and opens straight into the split screen from then on.
4. Test: scan any code with each scanner. The top bar shows which half received it.
5. Instrument stations (PCBA, Final): click **Connect analyser** in that half once.

## Daily use
- Each operator scans their own badge with their own scanner.
- Verdicts: click **Pass / Fail** in your half, or scan the printed command cards with your scanner:
  **PASS**, **FAIL**, then **REASON 1–7**, or **BACK**. Print them from **Command cards**.
  (The Enter / Space keys cannot be used here, because two operators share one keyboard.)
- A code scanned without a prefix, or typed by hand, is refused.
- **Back to one station** (top right) returns the PC to a normal single station.
