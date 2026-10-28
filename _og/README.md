Sources for the social card and favicons. Jekyll skips `_og/`, so these are not published.

Regenerate from the repo root after editing `card.html` or `favicon.html`:

```bash
C="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$C" --headless=new --hide-scrollbars --force-device-scale-factor=1 --virtual-time-budget=8000 \
  --window-size=1200,630 --screenshot=assets/og-card.png "file://$PWD/_og/card.html"
"$C" --headless=new --hide-scrollbars --force-device-scale-factor=1 --virtual-time-budget=8000 \
  --window-size=512,512 --screenshot=/tmp/fav512.png "file://$PWD/_og/favicon.html"
python3 -c "
from PIL import Image
im = Image.open('/tmp/fav512.png').convert('RGB')
im.resize((180, 180), Image.LANCZOS).save('assets/apple-touch-icon.png')
im.resize((32, 32), Image.LANCZOS).save('assets/favicon-32.png')
im.save('favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])"
```

After deploying, refresh LinkedIn's cached preview at https://www.linkedin.com/post-inspector/
