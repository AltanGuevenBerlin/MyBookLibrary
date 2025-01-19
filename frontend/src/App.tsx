import './App.css'                                      // CSS-Datei, die das Styling der Komponente enthält
import axios from "axios";                              // wird für HTTP-Anfragen verwendet
import {useEffect, useState} from "react";
import BookGallery from "./Component/BookGallery.tsx";              // useEffect: verwaltet Seiteneffekte wie Datenabrufe
                                                        // useState: ermöglicht lokalen Zustand in funktionalen Komponenten zu verwenden
function App() {

    const[value, setValue] = useState<Book[]>([])

    function getHello() {
        axios.get("/api/book")                          // Funktion sendet GET-Anfrage an API-Endpunkt /api/book
            .then(response => setValue(response.data))
    }

    useEffect(() => {
        getHello()
    }, [])

  return (
    <>
        <BookGallery/>
    </>
  )
}

export default App