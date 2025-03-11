# Todo-List App

Este é um projeto de Todo-List simples e funcional, desenvolvido com **HTML**, **CSS** e **JavaScript**. Ele permite adicionar, marcar como concluída e remover tarefas, com persistência de dados usando `localStorage`.

## Tecnologias Utilizadas
- **HTML5**
- **CSS3** (Design responsivo)
- **JavaScript** (Manipulação da DOM e armazenamento local)

## Funcionalidades
✅ Adicionar novas tarefas
✅ Marcar tarefas como concluídas
✅ Remover tarefas
✅ Salvar automaticamente as tarefas no `localStorage`

## Como Rodar o Projeto
1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/todo-list-app.git
```
2. Navegue até o diretório do projeto:
```bash
cd todo-list-app
```
3. Abra o arquivo `index.html` diretamente no navegador.

## Estrutura de Arquivos
```
.
├── index.html
├── src
│   ├── style.css
│   ├── script.js
│   └── images
│       ├── icon.png
│       ├── unchecked.png
│       └── checked.png
```

## Explicação do Código
### HTML (`index.html`)
- Estrutura principal do aplicativo.
- Contém o campo de entrada para novas tarefas e a lista de tarefas.

### CSS (`style.css`)
- Estilização responsiva com layout elegante e moderno.
- Uso de gradiente para o fundo e um card branco para destacar o conteúdo.

### JavaScript (`script.js`)
- **`addTask()`**: Adiciona uma nova tarefa à lista. Se o campo estiver vazio, uma mensagem de alerta é exibida.
- **`saveData()`**: Salva as tarefas no `localStorage` para manter os dados mesmo após recarregar a página.
- **`displayTask()`**: Exibe as tarefas salvas ao iniciar o aplicativo.
- **Event Listener**: Permite marcar uma tarefa como concluída ou removê-la.

## Melhorias Futuras
🚀 Adicionar filtro para visualizar apenas tarefas pendentes ou concluídas.
🚀 Permitir edição direta das tarefas.
🚀 Implementar temas claros e escuros.

## Autor
- [Luís Gustavo](https://github.com/Gustabolou)

