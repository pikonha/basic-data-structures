import { DataStructure } from "./base.js";

/**
 * Uma pilha é uma estrutura de dados que segue o princípio LIFO (Last In, First Out),
 * onde o último elemento a entrar é o primeiro a sair. Elementos são adicionados e
 * removidos do topo da pilha, como uma pilha de pratos onde o último prato colocado
 * é o primeiro a ser retirado.
 */

/**
 * Classe que implementa uma pilha (Stack).
 * Herda da classe abstrata DataStructure.
 */
export class Stack extends DataStructure {
  /**
   * Construtor da classe Stack.
   * Inicializa a pilha.
   */
  constructor() {
    super();
  }

  /**
   * Adiciona um elemento ao topo da pilha.
   * @param {any} element - O elemento a ser adicionado.
   */
  add(element) {}

  /**
   * Remove e retorna o elemento no topo da pilha.
   * @returns {any|null} - O elemento removido ou null se a pilha estiver vazia.
   */
  remove() {}

  /**
   * Retorna o elemento no topo da pilha sem removê-lo.
   * @returns {any|null} - O elemento no topo da pilha ou null se a pilha estiver vazia.
   */
  peek() {}

  /**
   * Verifica se a pilha está vazia.
   * @returns {boolean} - True se a pilha estiver vazia, caso contrário, false.
   */
  isEmpty() {}

  /**
   * Retorna o número de elementos na pilha.
   * @returns {number} - O tamanho da pilha.
   */
  size() {}
}
