const Discord = require("discord.js");
 
    Enmap = require("enmap");
    const emojidedo = '👉🏽'
    const nomeservidor = 'Lucky Clothing'
    const fs = require("fs");
    const talkedRecently = new Set();  
    //const anunciarc = message.guild.channels.cache.get('920862320643702837');
    const { MessageEmbed } = require('discord.js');
const config = require("./config");

const client = new Discord.Client({

  allowedMentions: {
    parse: ["roles", "users"],
    repliedUser: false,

  },
  partials: ['MESSAGE', 'CHANNEL'],
  intents: [ 
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
  ],
 

});
client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`carregando ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.cache.get('920374691623997461')
    if (!channel) return;

    let Embed = new Discord.MessageEmbed()
    .setTitle(`Olá  @${member.user.username}!`)
    .setAuthor("Sejá muito bem-vindo ao " + nomeservidor)
    .setColor("#4D1A7F")
    .setDescription("\nSeja muito bem-vindo a nossa comunidade :tada::tada::tada: \n\n\nCaso queira retirar dúvidas basta abrir o ticket em #olá-mundo\n\n Irei te retirecionar imediatamente para um staff\n\n\nDivirta-se, \n Tenha um bom dia ! \n \n \n               ")
    .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 1024}))
    return channel.send({embeds: [Embed]})
})


client.login(config.token)

client.settings = new Enmap({name: "settings"});

const arrayOfStatus = [
    'Ajudando pessoas...',
    'Construindo um modelo 3d...',
    'Trabalhando...',
    'Aprendendo...',
    'Pensando...',
    'Analisando dados...',
    'Respondendo pessoas!...',
    'Fazendo Design 3D...',
    'Colocando em ordem...',
    'Organizando...',
    'Batendo na cabeça do serra',
    'Aquecendo os motores...',
    'Decolando',
    'Encontrei um ERRO',
    'Concertando',
    'FiveM',
    'Gerando Tokens',
    'Coletando Lixo',
    'Reciclando memória',
    'Análise...',
    'Procurando...',
    'Criando...',
    'Analisando 0 e 1',
    'Encontrando Respostas',
    'Encaminhando a Entrega',
    'Comendo Pizza',
    'Comendo Hamburguer',
    'Analisando sintaxe',
    'Relembrando...'

]

client.on('ready', () => {
    console.log(`${client.user.tag} agora está online`)
    client.categories = fs.readdirSync("./commands/");

    setInterval(() => {
        client.user.setPresence({ activities: [{ name: arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)] }], status: 'online', type: "WATCHING" })
    }, 5000)
    
}) 

    


client.on("messageCreate", async (message) => {
    if(!message.guild || message.author.bot) return;

    let args = message.content.slice(config.prefix.length).trim().split(" ");
    let cmd = args.shift()?.toLowerCase();

    if(!message.content.startsWith(config.prefix) || !cmd || cmd.length == 0) return;

    client.settings.ensure(message.guildId, {
        TicketSystem1: {
            channel: "",
            message: "",
            category: "",
        }
        
    })
    if (cmd === `anunciar` && message.author.id =='310905377577238528' || message.author.id == '500459991745167360' || message.author.id == '323219469046382592') {
  
        const channel = message.guild.channels.cache.get('920390704293896222'); 
        const say = args.join(" ");
      
        const user = message.author.user;
        if (!say) return message.channel.send(`Coloque algo para ser anunciado!`) 
        channel.send("Olá, temos algum(as) informações para vocês " + "@everyone");
 message.delete();
        let Embed = new Discord.MessageEmbed()
      
    .setTitle("📢 ANNOUNCIAMENT 📢")
    .setAuthor("Sistema de anuncio do " + nomeservidor)
    .setColor("YELLOW")
    .setDescription("INFORMAÇÃO SOBRE O SERVIDOR: "+ " \n\n\n" + " ➜ **"+say +"**" + "\n\n\n\n ➜ Obrigado pela atenção de todos, qualquer tipo de dúvida estamos a disposição para atende-los o mais rápido possível\n\n\n\n Atenciosamente, \n Equipe Lucky Clothing.                                                            ")
    .addField("\n\n**Fundadores**", " Nathanzin, RogerinMS, ! Tokyo")
    .setThumbnail("https://cdn.discordapp.com/attachments/391692863009849355/921079232665362462/omiranha.jpg")
    .setTimestamp()
    return channel.send({embeds: [Embed]})
    }
    
    if(cmd == "help" || cmd == "ajuda"){
    message.delete()

       
        let Embed = new Discord.MessageEmbed()
        .setTitle("Olá você pediu ajuda ?")
        .setAuthor("Aqui estão algumas informações:")
        .setColor("GREEN")
        .addField("\n\nFundadores:", "Nathanzin, RogerinMS, ! Tokyo")
        .setDescription(emojidedo+" **Servidor: Nós somos uma loja online que fornece serviços de modelagem 3D para o seu servidor de FiveM**\n\n"+ emojidedo+" Administração: Atualmente estamos contando com a ajuda de 3 pessoas \n\n"+emojidedo+" **Dúvidas: Qualquer tipo de dúvida, recomenda-se que abra um ticket em: <#920374692328660995>**\n \n"+emojidedo+" Sobre mim: Fui feito exclusivamente para o servidor " +nomeservidor + ". No momento estou em constantes atualizações para promover a melhor capacidade para ajudar o público\n\n"+emojidedo+" **Parceiros: Atualmente não contamos com nenhum parceiro, caso queira ser abra um ticket (<#920374692328660995>) na categoria 🛒 Parceria** \n\n"+emojidedo+"Site: Atualmente estamos com o site em construção, em breve terá atualizações.\n\n"+emojidedo+" **Anuncios: Qualquer tipo de anúncio no servidor eu mesmo te avisarei em <#920390704293896222>**")
        .setThumbnail("https://cdn.discordapp.com/attachments/391692863009849355/921079232665362462/omiranha.jpg")
    return message.channel.send({embeds: [Embed]})
    }

        
   
    if(cmd == "ping") {
        return message.reply(`\`🏓\` Ping: \`${client.ws.ping}ms\``)
    }

    if(cmd == "close") {
        let ticketUserId = client.settings.findKey(d => d.channelId == message.channelId);
    
        if(!client.settings.has(ticketUserId)){
            return message.reply({
                content: `:x: Este canal não é para ticket`
            })
        }
        client.settings.delete(ticketUserId);
        message.reply("Este ticket irá se encerrar em 3 segundos!");
        setTimeout(() => {
            message.channel.delete().catch(()=>{});
        }, 3000)
    }
    if (cmd == 'clear' && message.author.id == '310905377577238528' || message.author.id == '500459991745167360') {
        
        if (args[0] >= 100) {
            message.delete()
            message.channel.bulkDelete(99, true);
            
        } else {
            message.delete()
            message.channel.bulkDelete(99, true)
           
        }
        
    }
    
    

if (cmd == "setup" && message.author.id =='310905377577238528' || message.author.id == '500459991745167360') {
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]); 
        if(!channel) return message.reply(":x: Por favor, selecione o canal desejado para enviar a mensagem de ticket ```Exemplo: !setup channel (nessa sintaxe)```");

        let TicketEmbed = new Discord.MessageEmbed()
            .setColor("WHITE")
            .setTitle("`🎫` Criar um ticket")
            .setDescription("Precisa de ajuda ? Selecione alguma das opções abaixo\n Do you need a help ? Select one of the options below and our team will help you")
            .setFooter(message.guild.name, message.guild.iconURL({dynamic: true}));
        
            let Menu = new Discord.MessageSelectMenu()
            .setCustomId("1ticket")
            .setPlaceholder("Clique para abrir um ticket!")
            .setMaxValues(1) 
            .setMinValues(1)
            .addOptions([
                {
                    label: "Geral".substr(0, 25),
                    value: "gen_h".substr(0, 25), 
                    description: "Dúvidas de modo geral. \n Doubts in general".substr(0, 50), 
                    emoji: "📖",
                },
                {
                    label: "Pagamentos".substr(0, 25),
                    value: "order_h".substr(0, 25), 
                    description: "Caso queira saber como funciona o nosso método de pagamento.".substr(0, 90),
                    description: "Some doubts about our payment system".substr(0, 70),
                    emoji: "💳",
                },
                {
                    label: "Parceria".substr(0, 25),
                    value: "order_p".substr(0, 25), 
                    description: "Caso queira formar parceria e retirar dúvidas sobre.".substr(0, 90),
                
                    emoji: "🛒",
                }
            ])
        let row = new Discord.MessageActionRow().addComponents(Menu);
        
        channel.send({
            embeds: [TicketEmbed],
            components: [row]
        }).then((msg) => {
            client.settings.set(message.guildId, channel.id, "TicketSystem1.channel")
            client.settings.set(message.guildId, msg.id, "TicketSystem1.message")
            client.settings.set(message.guildId, channel.parentId, "TicketSystem1.category")
            return message.reply("Configuração foi concluida com sucesso 😃");
        }).catch((e) => {
            console.log(e);
            return message.reply("ERRO: Um erro inesperado aconteceu");
        })
    } 

});

client.on("interactionCreate", async (interaction) => {
    if(!interaction.isSelectMenu() || !interaction.guildId || interaction.message.author.id != client.user.id) return
    
    client.settings.ensure(interaction.guildId, {
        TicketSystem1: {
            channel: "",
            message: "",
            category: "",
        }
    })

    let data = client.settings.get(interaction.guildId)
    if(!data.TicketSystem1.channel || data.TicketSystem1.channel.length == 0) return


    if(interaction.channelId == data.TicketSystem1.channel && interaction.message.id == data.TicketSystem1.message) {        
        switch(interaction.values[0]){
            case "gen_h": {
                let channel = await CreateTicket({
                    OpeningMessage: "Estamos criando o ticket...",
                    ClosedMessage: `Ticket aberto em: <#{channelId}>`,

                    message: client.users.fetch('310905377577238528').then((user) => {
                        let Embed = new Discord.MessageEmbed()
                        .setTitle("🚨 DISCORD BOT MESSAGE SYSTEM 🚨:")
                      
                        .setColor("RED")
                  
                        .setDescription("👉 ALERTA: Um usuário acaba de abrir um ticket.\n\n 👉 CATEGORIA: 💳 PAGAMENTOS 💳 \n \n 👉 Lembre-se quando finalizar digite !close \n\n👉 Agradecemos pelo seu serviço auxiliando na equipe\n\n\n Atenciosamente,\n System BOT 👊")
                        .setThumbnail("https://cdn.discordapp.com/attachments/391692863009849355/921079232665362462/omiranha.jpg")
                        return user.send({embeds: [Embed]})    
                    }),
                    message2:client.users.fetch('323219469046382592').then((user) => {
                        let Embed = new Discord.MessageEmbed()
                        .setTitle("🚨 DISCORD BOT MESSAGE SYSTEM 🚨:")
                      
                        .setColor("RED")
                       
                        .setDescription("👉 ALERTA: Um usuário acaba de abrir um ticket.\n\n 👉 CATEGORIA: 💳 PAGAMENTOS 💳 \n \n 👉 Lembre-se quando finalizar digite !close \n\n👉 Agradecemos pelo seu serviço auxiliando na equipe\n\n\n Atenciosamente,\n System BOT 👊")
                        .setThumbnail("https://cdn.discordapp.com/attachments/391692863009849355/921079232665362462/omiranha.jpg")
                        return user.send({embeds: [Embed]})    
                    }),
                    message3:client.users.fetch('500459991745167360').then((user) => {
                        let Embed = new Discord.MessageEmbed()
                        .setTitle("🚨 DISCORD BOT MESSAGE SYSTEM 🚨:")
                      
                        .setColor("RED")
               
                        .setDescription("👉 ALERTA: Um usuário acaba de abrir um ticket.\n\n 👉 CATEGORIA: 💳 PAGAMENTOS 💳 \n \n 👉 Lembre-se quando finalizar digite !close \n\n👉 Agradecemos pelo seu serviço auxiliando na equipe\n\n\n Atenciosamente,\n System BOT 👊")
                        .setThumbnail("https://cdn.discordapp.com/attachments/391692863009849355/921079232665362462/omiranha.jpg")
                        .setTimestamp()
                        return user.send({embeds: [Embed]})    
                    }),
                    embeds: [new Discord.MessageEmbed().setColor("YELLOW").setTitle("🚨 Informação: 🚨 ").setDescription("👉 Acabei de encaminhar para equipe sua dúvida\n\n👉 Aguarde alguns minutos que você será atendido \n\n Obrigado pela atenção!").setTimestamp()],
                }).catch(e=>{
                    return console.log(e)
                })
                console.log(channel.name);
                
            } break;
           
            case "order_h": {
                let channel = await CreateTicket({
                    OpeningMessage: "Estamos criando o ticket...",
                    
                    ClosedMessage: `Ticket aberto em: <#{channelId}>`,
                    message: client.users.fetch('310905377577238528').then((user) => {
                        let Embed = new Discord.MessageEmbed()
                        .setTitle("🚨 DISCORD BOT MESSAGE SYSTEM 🚨:")
                      
                        .setColor("RED")
                      
                        .setDescription("👉 ALERTA: Um usuário acaba de abrir um ticket.\n\n 👉 CATEGORIA: 📖 GERAL 📖 \n \n 👉 Lembre-se quando finalizar digite !close \n\n👉 Agradecemos pelo seu serviço auxiliando na equipe\n\n\n Atenciosamente,\n System BOT 👊")
                        .setThumbnail("https://cdn.discordapp.com/attachments/391692863009849355/921079232665362462/omiranha.jpg")
                        return user.send({embeds: [Embed]})    
                    }),
                    message2:client.users.fetch('323219469046382592').then((user) => {
                        let Embed = new Discord.MessageEmbed()
                        .setTitle("🚨 DISCORD BOT MESSAGE SYSTEM 🚨:")
                     
                        .setColor("RED")
                  
                        .setDescription("👉 ALERTA: Um usuário acaba de abrir um ticket.\n\n 👉 CATEGORIA: 📖 GERAL 📖 \n \n 👉 Lembre-se quando finalizar digite !close \n\n👉 Agradecemos pelo seu serviço auxiliando na equipe\n\n\n Atenciosamente,\n System BOT 👊")
                        .setThumbnail("https://cdn.discordapp.com/attachments/391692863009849355/921079232665362462/omiranha.jpg")
                        return user.send({embeds: [Embed]})   
                    }),
                    message3:client.users.fetch('500459991745167360').then((user) => {
                        let Embed = new Discord.MessageEmbed()
    .setTitle("🚨 DISCORD BOT MESSAGE SYSTEM 🚨:")
    .setColor("RED")
    .setDescription("👉 ALERTA: Um usuário acaba de abrir um ticket.\n\n 👉 CATEGORIA: 📖 GERAL 📖 \n \n 👉 Lembre-se quando finalizar digite !close \n\nAgradecemos pelo seu serviço auxiliando na equipe\n\n\n Atenciosamente,\n System BOT 👊")
    .setThumbnail("https://cdn.discordapp.com/attachments/391692863009849355/921079232665362462/omiranha.jpg")
    return user.send({embeds: [Embed]})     
                    }),
                    embeds: [new Discord.MessageEmbed().setColor("YELLOW").setTitle("🚨 Informação: 🚨 ").setDescription("👉 Acabei de encaminhar para equipe sua dúvida\n\n👉 Aguarde alguns minutos que você será atendido \n\n Obrigado pela atenção!").setTimestamp()],
                    
                    
                    
                }).catch(e=>{
                    return console.log(e)
                })
                console.log(channel.name);
                
               
                
            } break;
            case "order_p": {
                let channel = await CreateTicket({
                    OpeningMessage: "Estamos criando o ticket...",
                    
                    ClosedMessage: `Ticket aberto em: <#{channelId}>`,
                    message: client.users.fetch('310905377577238528').then((user) => {
                        let Embed = new Discord.MessageEmbed()
                        .setTitle("🚨 DISCORD BOT MESSAGE SYSTEM 🚨:")
                      
                        .setColor("RED")
                      
                        .setDescription("👉 ALERTA: Um usuário acaba de abrir um ticket.\n\n 👉 CATEGORIA: 🛒 PARCERIA 🛒 \n \n 👉 Lembre-se quando finalizar digite !close \n\n👉 Agradecemos pelo seu serviço auxiliando na equipe\n\n\n Atenciosamente,\n System BOT 👊")
                        .setThumbnail("https://cdn.discordapp.com/attachments/391692863009849355/921079232665362462/omiranha.jpg")
                        return user.send({embeds: [Embed]})    
                    }),
                    message2:client.users.fetch('323219469046382592').then((user) => {
                        let Embed = new Discord.MessageEmbed()
                        .setTitle("🚨 DISCORD BOT MESSAGE SYSTEM 🚨:")
                      
                        .setColor("RED")
                   
                        .setDescription("👉 ALERTA: Um usuário acaba de abrir um ticket.\n\n 👉 CATEGORIA: 🛒 PARCERIA 🛒 \n \n 👉 Lembre-se quando finalizar digite !close \n\n👉 Agradecemos pelo seu serviço auxiliando na equipe\n\n\n Atenciosamente,\n System BOT 👊")
                        .setThumbnail("https://cdn.discordapp.com/attachments/391692863009849355/921079232665362462/omiranha.jpg")
                        return user.send({embeds: [Embed]})    
                    }),
                    message3:client.users.fetch('500459991745167360').then((user) => {
                        let Embed = new Discord.MessageEmbed()
                        .setTitle("🚨 DISCORD BOT MESSAGE SYSTEM 🚨:")
                      
                        .setColor("RED")
                       .setDescription("👉 ALERTA: Um usuário acaba de abrir um ticket.\n\n 👉 CATEGORIA: 🛒 PARCERIA 🛒 \n \n 👉 Lembre-se quando finalizar digite !close \n\n👉 Agradecemos pelo seu serviço auxiliando na equipe\n\n\n Atenciosamente,\n System BOT 👊")
                        .setThumbnail("https://cdn.discordapp.com/attachments/391692863009849355/921079232665362462/omiranha.jpg")
                        return user.send({embeds: [Embed]})    
                    }),
                    embeds: [new Discord.MessageEmbed().setColor("YELLOW").setTitle("🚨 Informação: 🚨 ").setDescription("👉 Acabei de encaminhar para equipe sua dúvida\n\n👉 Aguarde alguns minutos que você será atendido \n\n Obrigado pela atenção!").setTimestamp()],
                    
                    
                    
                }).catch(e=>{
                    return console.log(e)
                })
                console.log(channel.name);
                
                
                
            } break;
          
        
    } 
        async function CreateTicket(ticketdata) {
            return new Promise(async function(resolve, reject) {
                await interaction.reply({
                    ephemeral: true,
                    content: ticketdata.OpeningMessage
                })
                let { guild } = interaction.message;
                let category = guild.channels.cache.get(data.TicketSystem1.category);
                if(!category || category.type != "GUILD_CATEGORY") category = interaction.message.channel.parentId || null; 
                let optionsData = {
                    type: "GUILD_TEXT",
                    topic: `${interaction.user.tag} | ${interaction.user.id}`,
                    permissionOverwrites: [],
                }
                if(client.settings.has(interaction.user.id)){
                    let TicketChannel = guild.channels.cache.get(client.settings.get(interaction.user.id, "channelId"))
                    if(!TicketChannel) {
                        client.settings.delete(interaction.user.id)
                    } else {
                        
                        return interaction.editReply({
                            ephemeral: true,
                            content: `Você já tem um ticket aberto em : <#${TicketChannel.id}>`,
                           
                        })
                    }
                }
                optionsData.permissionOverwrites = [...guild.roles.cache.values()].sort((a, b) => b?.rawPosition - a.rawPosition).map(r => {
                    let Obj = {}
                    if(r.id){
                        Obj.id = r.id;
                        Obj.type = "role";
                        Obj.deny = ["SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS", "ADD_REACTIONS", "ATTACH_FILES"]
                        Obj.allow = [];
                        return Obj;
                    } else {
                        return false;
                    }
                }).filter(Boolean);
                optionsData.permissionOverwrites.push({
                    id: interaction.user.id,
                    type: "member",
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS", "ADD_REACTIONS", "ATTACH_FILES"],
                    deny: [],
                })
                while (optionsData.permissionOverwrites.length >= 99){
                optionsData.permissionOverwrites.shift();
                }
                if(category) optionsData.parent = category;
                guild.channels.create(`ticket-de-${interaction.user.username.split(" ").join("-")}`.substr(0, 32), optionsData).then(async channel => {
                    await channel.send({
                        content: `<@${interaction.user.id}>`,
                        embeds: ticketdata.embeds
                    }).catch(()=>{});
                    client.settings.set(interaction.user.id, {
                        userId: interaction.user.id,
                        channelId: channel.id,
                    })
                    await interaction.editReply({
                        ephemeral: true,
                        content: ticketdata.ClosedMessage.replace("{channelId}", channel.id)
                    }).catch(()=>{});
                    resolve(channel);
                }).catch((e)=>{
                    reject(e)
                });
            })
            
            
        }
       

    } 
    
})