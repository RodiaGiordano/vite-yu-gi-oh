Descrizione:
Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato.
Al caricamento della pagina, effettuate una chiama ajax all'API di Yu Gi Oh: https://db.ygoprodeck.com/api/v7/cardinfo.php
e con i dati restituiti, stampate una card per ogni carta.
ATTENZIONE: l'api restituisce tutti i risultati in un colpo solo. Per evitare attese e/o rallentamenti nelle richieste, potete diminuire il numero di risultati sfruttando i parametri num e offset
https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0
Bonus:
Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.

---

Traccia:
Continuate a lavorare nella stessa repo di ieri e aggiungete un componente per filtrare le carte di gioco. Procedete in ordine e con calma.
Qui ci sono le slides su emit e computed.

---

Milestone 1:
Create un componente BaseSelect per filtrare i risultati in base all’archetipo.
Le option della select devono essere popolate dinamicamente chiamando questo endpoint dell'api:
https://db.ygoprodeck.com/api/v7/archetypes.php
Consigli per la M1:
Testare la chiamata dell'API con PostMan
Verificare la struttura dati
Implementare la chiamata Axios all'API
Verificare che il componente BaseSelect riceva correttamente l'array di archetipi
Stampare gli archetipi nelle option della select

---

Milestone 2:
Quando l'utente seleziona un valore dalla lista, viene effettuata una chiamata alle API con l'archetipo selezionato
Consigli per la M2:
Collegare la select ai data
Verificare che i data siano reattivi al cambio della select
Emettere un custom event per il genitore di BaseSelect passando come parametro il valore della select
Sul genitore ascoltare e gestire l'evento customizzato
Costruire l'url dell'API con il parametro del filtro (verificare che l'url sia corretto)
Chiamare l'url appena costruito e aggiornare i risultati

---

Bonus:
Creare un componente che mostri il numero totale di risultati ottenuti.

---

Link alla documentazione delle API di Yu-Gi-Oh:
https://ygoprodeck.com/api-guide/
