import { DataStructure } from "./base.js";

/**
 * Uma fila é uma estrutura de dados que segue o princípio FIFO (First In, First Out),
 * onde o primeiro elemento a entrar é o primeiro a sair. Elementos são adicionados
 * no final da fila e removidos do início, garantindo uma ordem de processamento
 * linear e organizada, como uma fila de pessoas esperando em um banco.
 */

/**
 * Classe que implementa uma fila (Queue).
 * Herda da classe abstrata DataStructure.
 */
export class Queue extends DataStructure {
  /**
   * Construtor da classe Queue.
   * Inicializa a fila.
   */
  constructor() {
    super();
  }

  /**
   * Adiciona um elemento ao final da fila.
   * @param {any} element - O elemento a ser adicionado.
   */
  add(element) {}

  /**
   * Remove e retorna o elemento no início da fila.
   * @returns {any|null} - O elemento removido ou null se a fila estiver vazia.
   */
  remove() {}

  /**
   * Retorna o elemento no início da fila sem removê-lo.
   * @returns {any|null} - O elemento no início da fila ou null se a fila estiver vazia.
   */
  peek() {}

  /**
   * Verifica se a fila está vazia.
   * @returns {boolean} - True se a fila estiver vazia, caso contrário, false.
   */
  isEmpty() {}

  /**
   * Retorna o número de elementos na fila.
   * @returns {number} - O tamanho da fila.
   */
  size() {}
}
