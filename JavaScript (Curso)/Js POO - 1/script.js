function animal(nome,peso){
    this.nome = nome
    this.peso = peso
}

Animal = new animal("Elefante", "1500kg")

alert(Animal.nome)