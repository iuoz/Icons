import { Command } from "commander";
import chalk from "chalk";
import search from "./commands/search";
import list from "./commands/list";
import helpCommand from "./commands/help";

const program = new Command();

program
  .name("icons")
  .description("CLI para navegar e buscar ícones do pack icons")
  .version("1.0.0");

program
  .command("search <query>")
  .description("Buscar ícones pelo nome")
  .action((query) => search(query));

program
  .command("list")
  .description("Listar categorias disponíveis")
  .action(() => list());

program
  .command("help")
  .description("Mostrar ajuda da CLI")
  .action(() => helpCommand());

program.parse();
