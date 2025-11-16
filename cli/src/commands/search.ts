import chalk from "chalk";
import { scanIcons } from "../utils/fileScanner";

export default async function search(query: string) {
  const icons = await scanIcons();

  const results = icons.filter(icon =>
    icon.name.toLowerCase().includes(query.toLowerCase())
  );

  if (results.length === 0) {
    console.log(chalk.red(`Nenhum ícone encontrado contendo: "${query}"`));
    return;
  }

  console.log(chalk.cyan(`Ícones encontrados (${results.length}):\n`));

  for (const icon of results) {
    console.log(
      `${chalk.green("✓")} ${chalk.white(icon.name)} ${chalk.gray(
        `(${icon.category})`
      )}\n${chalk.blue(icon.path)}\n`
    );
  }
}
