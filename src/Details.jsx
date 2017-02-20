const React = require('react')
const Header = require('./Header')

class Details extends React.Component {
  render () {
    const params = this.props.params || {}
    const { title, description, year, poster, trailer } = params

    return (
      <div style={{textAlign: 'left'}} className='container'>
        <Header />
        <div className='video-info'>
          <h2 className='video-title'>{title}</h2>
          <h3 className='video-year'>({year})</h3>
          <img className='video-poster' src={`public/img/posters/${poster}`} />
          <p className='video-description'>{description}</p>
        </div>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}

const { object } = React.PropTypes

Details.propTypes = {
  params: object.isRequired
}

module.exports = Details
