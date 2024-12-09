# TASCA 1 - IDENTIFICAR CARACTERÍSTICAS

Els llenguatges de marques, com HTML, XML o SVG, són essencials per estructurar i definir informació en documents de text que es fan servir en diverses aplicacions, especialment al web. Aquests llenguatges comparteixen alguns elements comuns però tenen també diferències notables pel que fa a la seva estructura, propòsit i semàntica. A continuació, analitzem les seves característiques principals en termes d’elements, etiquetes i propietats.

## HTML (HyperText Markup Language)

HTML és el llenguatge de marques per crear pàgines web i estructurar el seu contingut. Té una estructura jeràrquica basada en etiquetes o tags. Les etiquetes són parells de noms envoltats per claudàtors angulats, com html, body, div, etc., que tenen funcions semàntiques i estructurals.

    - Elements: Inclouen capçaleres (<h1>, <h2>), paràgrafs (<p>), enllaços (<a>), imatges (<img>), i altres components que defineixen com es mostra i estructura el contingut d’una pàgina web.
    
    - Etiquetes: Cada element està delimitat per una etiqueta d'obertura (<p>) i una de tancament (</p>), encara que algunes etiquetes són auto-tancables, com <img> o <br>.
    
    - Propietats/atributs: Les etiquetes poden tenir atributs, com id, class, src o alt, que permeten personalitzar el comportament o l'estil de l'element. Per exemple, <img src="image.jpg" alt="Descripció">.

## XML (eXtensible Markup Language)

XML és un llenguatge de marques general que defineix un conjunt de regles per a codificar documents de manera llegible per humans i màquines. A diferència de HTML, no té etiquetes predeterminades, sinó que és un llenguatge adaptable a diferents contextos.

    - Elements: Els elements a XML són definits per l'usuari segons el tipus de dades que necessita representar. Per exemple, <book>, <author>, <title>.
    
    - Etiquetes: Les etiquetes d'XML són flexibles i personalitzades segons la necessitat. Cada etiqueta té un parell de tancament (<book>...</book>), a diferència d’algunes etiquetes d’HTML que poden ser auto-tancables.
    
    - Propietats/atributs: XML permet afegir atributs per a emmagatzemar informació addicional, com <book genre="fiction">, però és més estricte amb l’estructura i no permet errades com a HTML.

## SVG (Scalable Vector Graphics)

SVG és un llenguatge basat en XML utilitzat per descriure gràfics vectorials escalables, molt utilitzat en gràfics web.

    - Elements: Els elements bàsics de SVG inclouen formes geomètriques com <circle>, <rect>, <line>, així com grups de formes o camins (<path>).
    
    - Etiquetes: Les etiquetes descriuen formes gràfiques i els seus atributs. Per exemple, <circle cx="50" cy="50" r="40" fill="blue" />.
    
    - Propietats/atributs: Les propietats inclouen dimensions (width, height), colors (fill, stroke), posicions (cx, cy) i altres característiques visuals que determinen l’aspecte del gràfic.

Els llenguatges de marques com HTML, XML i SVG comparteixen l’ús d’elements i etiquetes per estructurar dades. Tot i això, mentre HTML està enfocat a la presentació de continguts web, XML és un llenguatge de propòsit general per a estructurar qualsevol tipus d’informació i SVG és específic per a gràfics. Tots utilitzen atributs per afegir metadades i personalitzar el comportament dels seus elements.