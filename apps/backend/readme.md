# Backend

Backend provided by NHost

## Gotcha !

### Hotreload doesnt work for my `/functions`

Yeah - NHost doesn't handle very well file change in functions.

+ `/functions/_{filename}` change is not hotreload
+ `/src/${filename}` is not watched and we cant configure what folder is watch

