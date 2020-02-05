exports.index_get = (req, res) => {
  res.send('Certificate API.')
}

exports.certificates_dashboard_get = (req, res) => {
  res.send([
    {
      _id: 0,
      title: 'Participation 00',
      type: 'participation',
      event: 'Event 00',
      date: new Date(),
      awardee: [
        {
          name: 'Awardee 00',
          email: 'awardee@email.com'
        }
      ],
      organizer: 'Organizer 00',
      logos: [
        {
          _id: 0,
          file: 'path/to/image.png'
        }
      ],
      dignitories: [
        {
          _id: 0,
          name: 'Dignitory 00',
          position: 'Dignitory Position'
        }
      ]
    }
  ])
}
