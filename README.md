A program Vue.js keretrendszer használatával lett fejlesztve. 

Elsődlegesen azért választottam ennél a feladatnál a Vue.js-t, mivel ennek a keretrendszernek a használatában fejlesztek már több, min 3 éve, ebben van a legnagyobb tapasztalatom jelenleg.

# amoba-webapp aklamazás elindítása

Az elindításhoz szükséges egy node.js telepítése és az npm telepítése is.

Ezután console terminálban be kell lépni a program könyvtárába és npm i (npm install) paranccsal telepíteni kell a programban használt bővítményeket. Miután megtörténtek a telepítések a console terminálban az npm run serve paranccsal elindítjuk a programot, amit ezután böngészőben localhost:8080 porton megtekinthetünk.

# Játék felhasználó dokumentációja

## Bejelentkezés

A bejelentkezéshez egy dummy authentication API (https://dummyjson.com/docs/auth) került bekötésre, aminek a segtségével tényleges token kerül lekérdezésre a szerverről. A tokent eltároljuk a localStorage-ba egy érvényességi idővel. Az alábbi táblázatban található felhasználók adataival lehet bejelentkezni, hibás adatok megadása esetén egyszerű hiba üzenet jelenik meg. A bejelentkező adatok mellett, be lehet állítani tesztelés céllal egy érvényességi időt, aminek a lejárata után a rendszer visszadob a Login oldalra. (Az ellenőrzés egyelőre az oldal újra töltésével történik meg, de rá köthető API hívásokra, egyéb műveletekre.)

|Felhasználónév|Jelszó| |Felhasználónév|Jelszó |
|-|-|-|-|-|
|atuny0|9uQFF1Lh| |yraigatt3|sRQxjPfdS|
|hbingley1|CQutx25i8r| |kmeus4|aUTdmmmbH|
|rshawe2|OWsTbMUgFc| |jtreleven5|zY1nE46Zm|
|dpettegre6|YVmhktgYVS| |ggude7|MWwlaeWcOoF6|
|nloiterton8|HTQxxXV9Bq4| |umcgourty9|i0xzpX|
|acharlota|M9lbMdydMN| |rhallawellb|esTkitT1r|

## Játék kezelése

A játéknek elsőkörben a beállítási lehetőségei jelennek meg, ahol beállítható a pálya mérete (5-100 kocka) és, hogy hány jel keresztezése eredményezi a játék megnyerését (nyertes darabszám, 3-50 jel), továbbá tetszőleges játékos szám is beállítható (2-10 fő). Amint megadásra került a játékosok száma, meg kell adni kötelezően az adott játékos jelét, és feltételesen meg lehet adni a játékos nevét és a játékos jelének a színét. Ha minden beállítás megtörtént a szabályoknak megfelelően, akkor aktív lesz a Kezdés! gomb. A gomb megnyomásával elindul a játék.

A játék során a játékosok egymásután tehetnek a táblán található üres helyekre. Váltakozva egymás után jönnek, az hogy ki a következő játékos, azt a tábla felett lehet nyomonkövetni.

A tábla mérete változtatható, azaz rá lehet közelíteni vagy éppen kicsinyíteni a táblára. Erre a tábla felett található gombok lesznek a játékos segítségére. A nagyítás és a kicsinyítés közötti gomb visszaállítja a játék tábla méretét az eredeti méretébe.

A játék újraindítása gomb segítségével, ha elakadnak a játékosok (nem marad több hely), új játékot indíthatnak.

A játék beállításai is módosíthatóak, viszont ekkor az aktuális játék elveszik, és teljesen új játék fog indulni.

Ha egy játékos nyer, akkor megejelink egy felugróablak. Ha több mint 2 játékos játszik lehetőség van a tovább játszáshoz, így meg kapjuk a további helyezetteket.