import { DataStructure } from "./base.js";

// Classe que representa um nó da lista encadeada
class Node {
  constructor(value) {
    this.value = value; // Valor armazenado no nó
    this.next = null; // Referência para o próximo nó na lista
  }
}

/**
 * Uma lista encadeada é uma estrutura de dados linear na qual os elementos são
 * armazenados em nós. Cada nó contém um valor e uma referência para o próximo nó
 * na sequência, formando assim uma cadeia de elementos. Isso permite adicionar
 * e remover elementos de forma flexível, sem a necessidade de realocar memória
 * como acontece em arrays.
 */

// Classe que implementa a lista encadeada
class LinkedList extends DataStructure {
  constructor() {
    this.head = null; // Inicializa a cabeça da lista como nula
    this.length = 0; // Inicializa o tamanho da lista como 0
  }

  // Adiciona um novo nó com o valor especificado ao final da lista
  add(value) {}

  // Remove o nó com o valor especificado da lista, se existir
  remove(value) {}

  // Procura um nó com o valor especificado na lista e retorna o nó se encontrado, caso contrário, retorna nulo
  search(value) {}

  // Verifica se a lista está vazia
  isEmpty() {}

  // Retorna o número de elementos na lista
  size() {}

  // Imprime os elementos da lista para visualização
  print() {}
}
