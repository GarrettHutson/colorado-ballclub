import {defineField, defineType} from 'sanity'

export const gameType = defineType({
  name: 'game',
  title: 'Game',
  type: 'document',
  fields: [
    defineField({
      name: 'opponent',
      title: 'Opponent Team',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Game Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Game Time',
      type: 'string',
      description: 'Format: 7:05 PM',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        list: [
          {title: 'Home', value: 'Home'},
          {title: 'Away', value: 'Away'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'locationImage',
      title: 'Location Image',
      type: 'image',
      description: 'An image of the stadium or venue',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ticketsUrl',
      title: 'Tickets URL',
      type: 'url',
      description: 'Link to purchase tickets (only needed for home games)',
      validation: (rule) => 
        rule.custom((url, context) => {
          const {location} = context.document
          if (location === 'Home' && !url) {
            return 'Tickets URL is required for home games'
          }
          return true
        }),
    }),
    defineField({
      name: 'result',
      title: 'Game Result',
      type: 'object',
      fields: [
        {
          name: 'status',
          title: 'Status',
          type: 'string',
          options: {
            list: [
              {title: 'Scheduled', value: 'scheduled'},
              {title: 'In Progress', value: 'in-progress'},
              {title: 'Final', value: 'final'},
              {title: 'Postponed', value: 'postponed'},
              {title: 'Cancelled', value: 'cancelled'},
            ],
          },
          initialValue: 'scheduled',
        },
        {
          name: 'legendsScore',
          title: 'Legends Score',
          type: 'number',
        },
        {
          name: 'opponentScore',
          title: 'Opponent Score',
          type: 'number',
        },
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => {
          const date = new Date(doc.date)
          const formatted = date.toISOString().split('T')[0]
          return `${formatted}-vs-${doc.opponent.toLowerCase().replace(/\s+/g, '-')}`
        },
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'opponent',
      subtitle: 'date',
      media: 'locationImage',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      
      let formattedDate = ''
      if (subtitle) {
        const date = new Date(subtitle)
        formattedDate = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      }
      
      return {
        ...selection,
        subtitle: formattedDate ? `vs ${title} - ${formattedDate}` : `vs ${title}`,
      }
    },
  },
})