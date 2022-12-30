import { CommandInteraction, TextChannel } from 'discord.js'
import { SlashCommandBuilder } from '@discordjs/builders'
import { client } from '..'

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Send a message to a channel')
        .addStringOption(option => option.setName('channel').setDescription('The ID of the channel to send a message to').setRequired(true))
		.addStringOption(option => option.setName('message').setDescription('The message to send').setRequired(true))
	,
	async execute(interaction: CommandInteraction) {
		if (interaction.user.id !== '251458435554607114') return
        const channelID = interaction.options.getString('channel')!
		const message = interaction.options.getString('message')!
        interaction.reply(`Message sent to <#${channelID}>.`)
        return (client.channels.cache.get(channelID) as TextChannel).send(message)
	}
}