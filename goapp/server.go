package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
)

func main() {
	fmt.Printf("Starting server at port 8080\n")
	http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {

		fmt.Println(r.FormValue("name"))
		io.WriteString(w, "Welcome: "+r.FormValue("name"))
	})
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
