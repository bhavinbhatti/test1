/*CMD
  command: /adminaddbal01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let id =User.getProperty("adminmsgid")
let ad=Bot.getProperty("admin01")
let t=message
if(chat.chatid==1021837737){
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Api.deleteMessage({chat_id:chat.chatid,message_id:id})
Bot.setProperty("uinf1", t,"string")
Bot.sendMessage("Now send me amount you want to add balance. If you want remove balance from user use negative amount",{on_result:"/settatt"})
Bot.runCommand("/adminamo01")
}
