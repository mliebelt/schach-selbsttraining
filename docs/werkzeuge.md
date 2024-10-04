---
sidebar_position: 1
---
# Werkzeuge

Früher brauchte man zum Training ein Schachbrett samt Figuren, und Papier und Bleistift. Das ist schon lange vorbei. Hier sollten (kurz) die Werkzeuge dargestellt werden, die verfügbar sind, und die man lokal bei sich installieren muss, um sie zu verwenden. Die Nutzung von Websites hat massiv zugenommen, aber vielen ist das lokale Werkzeug dann doch noch lieber.

* Chessbase: der Platzhirsch, auch wenn ich ihn nicht zeigen kann (vermutlich haben andere Leute im Kurs das Werkzeug installiert)
* Scid: läuft auf allen Plattformen, hat ein sehr einfaches (aber funktionierendes) Modell
* LukasChess: hat sich zu einer Plattform ausgewachsen, mit der ich wenig vertraut bin

## Chessbase

Die eine Software, die jeder professionelle Schachspieler immer nutzt. Es gibt eine schöne Geschichte zur Entwicklung von Chessbase, getrieben von Garri Kasparov, der die Idee als erster präsentiert bekam. Chessbase hat (aus meiner Sicht) einige seltsame Entscheidungen in seiner Geschichte getroffen, die immer wieder leicht weiterentwickelte Software, die sehr teuer verkauft wird, gehört dazu. Fat Fritz als Clone von Stockfish gehört sicher auch nicht zu den Sternstunden der Firma.

Was bietet Chessbase (die Software) nun an?

* Je nach Version unterschiedliche Datenbanken mit vielen Partien aus aller Welt. Genannt Mega oder Big. Der Preisunterschied zur Einstiegsversion ohne Datenbank ist dann 50 bzw. 150 Euro.
* Die Software selbst kostet 149 Euro für die jeweils aktuellste Version. Ältere Versionen werden nicht mehr angeboten. Die Software läuft ausschließlich unter Windows. Ein Upgrade von 16 auf 17 kostet noch 119 Euro.
* Chessbase ist ein Programm zur Verwaltung von (beliebig großen) Datenbanken von Schachpartien und Stellungen. Es ist relativ komplex zu bedienen, und hinterläßt eine Vielzahl von Datenbank-Files auf der Festplatte (das neue Format 2cbh scheint das endlich gelöst zu haben).
* Die Oberfläche von Chessbase ist stark Microsoft-lastig, und wirkt etwas angestaubt.
* Die Partien selbst sind in einer Datenbank abgelegt, beim Öffnen hat man das übliche Brettfenster, und auf der rechten Seite verschiedenste Darstellungen zusätzlich. 

### Ressourcen

* [Schachgeflüser 125](https://www.schachgefluester.de/frederic-friedel/) ChessBase-Gründer Frederic Friedel
* [25 Jahre Chessbase](https://de.chessbase.com/post/25-jahre-chebase) mit der Geschichte, wie Kasparov mit der Hilfe von Chessbase im Simultan sich Vorteile verschaffte
* [Chessbase 17 Handbuch](https://download.chessbase.com/download/pdf/cb17-deu.pdf)

## Scid

Scid ist public domain, und wird aktiv weiter entwickelt. Im Kern hat es dieselbe Funktionalität wie Chessbase, aber auf das Wesentliche runtergestrippt:

* Partien in Datenbanken verwalten. Das Format hier ist immer PGN, was die Übertragung der Partien dann auch erleichtert, da das Textformat von anderen Readern gelesen und verstanden wird.
* Partien mit Annotationen versehen: Tags, Kommentare, NAGs, ...
* Grafische Symbole (leider anders als Lichess und chess.com, damit von denen nicht erkannt)

Die Aufteilung in verschiedene Sichten muss man lernen, sollte aber nicht das Problem sein. Stockfish ist fest eingebaut, andere Engines sind ebenfalls verfügbar, weitere können hinzugefügt werden. Es gibt Andeutungen von weiteren Erweiterungen (Spielen über FICS, gegen die Engine, ...), die aber nicht weiter betrachtet wurden.

Scid ist damit ein vollwertiger Ersatz für Chessbase, und hat (für mich) auch den Vorteil, dass es nicht nur unter Windows läuft. Ich persönlich habe Scid bisher nur sporadisch verwendet, da ich direkt von Chessbase auf Studien in Lichess (für alles) umgestiegen bin, und auch nicht mehr zurück möchte.

## Lucaschess

Ich nutze Lucaschess nicht, und habe von daher keine Erfahrungen damit. Mitglieder unseres Schachclubs waren aber voll des Lobes, und sagten, dass das Werkzeug alles abdeckt, was sie sich wünschen.

Lucaschess geht weit über Scid hinaus, hat aber eine eigenwillige Menuführung und Organisation. Man kann dort viel mehr Aspekte abdecken, als nur Partien zu erfassen. Basis davon sind ebenfalls PGN Dateien.

Hier ist die [Homepage](https://lucaschess.pythonanywhere.com/index?lang=de) zu finden, die weitere Informationen bereithält.

## Weitere Werkzeuge

Es gibt eine Vielzahl von Werkzeugen zum Schach, die nicht als Plattform geeignet sind, und genau einen Teil adressieren, das aber teils recht gut. Die Liste hat keinen Anspruch auf Vollständigkeit, und kann sicher um einige Einträge ergänzt werden. Es sind die Werkzeuge, die ich schon ausprobiert hatte, und teils auch immer wieder genutzt habe.

Ich habe mal die "Play Magnus Group" (die es [immer noch gibt](https://playmagnusgroup.com/)) auf Kandidaten untersucht.

### Chessvision.ai

Link: [Chessvision.ai](https://chessvision.ai/)

Gibt es schon einige Jahre, ist eine leichtgewichtige App, sowohl fÜr den Browser wie auch das Handy. Damit kann man Diagramme, die man auf dem Bildschirm hat (oder Variante als Bild vorliegend) zuerst einmal erfassen, und dann in Lichess oder chess.com analysieren. Man kann die Diagramme auch auf verschiedene Arten dann sharen: Email, FEN, ... so dass es keinen Grund mehr gibt, das nicht zu tun.

Hilft mir massiv, wenn ich schöne Ideen irgendwo sehe, wo es eben weder FEN noch PGN gibt. Funktioniert dem Hörensagen nach auch für Videos. Ich hatte auch Versuche gemacht, das mit PDF-Schachbüchern einzusetzen, aber dann benötigt man eine kostenpflichtige Version.

