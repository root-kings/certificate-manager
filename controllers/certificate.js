const certificates = [
  {
    _id: '0',
    title: 'Participation 00',
    template: '1',
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
]

const templates = [
  {
    _id: '0',
    title: 'Participation 00',
    type: 'participation',
    image: '/images/office.jpg'
  },
  {
    _id: '1',
    title: 'Participation 01',
    type: 'participation',
    image: '/images/office.jpg'
  },
  {
    _id: '2',
    title: 'Participation 02',
    type: 'participation',
    image: '/images/office.jpg'
  }
]

exports.index_get = (req, res) => {
  res.send('Certificate API.')
}

exports.certificates_dashboard_get = (req, res) => {
  res.send(certificates)
}

exports.certificates_templates_get = (req, res) => {
  res.send(templates)
}

exports.certificates_details_get = (req, res) => {
  res.send(certificates.filter(cert => cert._id == req.params.id)[0] || {})
}
