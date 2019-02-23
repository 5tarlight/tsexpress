import * as colors from 'colors'
import * as fs from 'fs'

class SLog {
  public static write(message: string): void {
    let date = new Date()

    fs.writeFileSync(__dirname + '/log/' + date.getFullYear() + '_' + (date.getMonth() + 1) + '_' + date.getDate() + '.log', message, { flag: 'a', encoding: 'utf-8' })
  }

  public static timestamp(): string {
    let date = new Date()

    return '[' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '] '
  }

  public static info(message: string): void {
    console.log(SLog.timestamp() + 'info'.bgWhite.black + message)
    SLog.write(SLog.timestamp() + message + '\n')
  }

  public static warn(message: string): void {
    console.log(SLog.timestamp() + 'warn'.bgYellow.white + message)
    SLog.write(SLog.timestamp() + message + '\n')
  }

  public static err(message: string): void {
    console.log(SLog.timestamp() + 'err'.bgRed.white + message)
    SLog.write(SLog.timestamp() + message + '\n')
  }

  public static success(message: string): void {
    console.log(SLog.timestamp() + 'success'.bgGreen.white + message)
    SLog.write(SLog.timestamp() + message + '\n')
  }
}