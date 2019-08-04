import React from 'react';
import './Gallery.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Gallery extends React.Component {

  state = ({
    imgs: [
      {url: 'http://rjoypetportraits.com/images/gallery/27.jpg', tags: ['dog', 'pencil', 'tan_paper', 'gallery'], orientation: 'portait'},
      {url: 'http://rjoypetportraits.com/images/gallery/31.jpg', tags: ['cat', 'pencil', 'white_paper', 'gallery'], orientation: 'landscape'},
      {url: 'http://rjoypetportraits.com/images/gallery/26.jpg', tags: ['dog', 'pencil', 'white_paper', 'gallery'], orientation: 'portait'},
      {url: 'http://rjoypetportraits.com/images/gallery/30.jpg', tags: ['dog', 'pencil', 'white_paper', 'gallery'], orientation: 'portait'},
      {url: 'http://rjoypetportraits.com/images/gallery/22.jpg', tags: ['cat', 'pencil', 'white_paper', 'gallery'], orientation: 'landscape'},
      {url: 'http://rjoypetportraits.com/images/gallery/14.jpg', tags: ['dog', 'cat', 'pencil', 'white_paper', 'gallery'], orientation: 'landscape'},
      {url: 'http://rjoypetportraits.com/images/gallery/13.jpg', tags: ['dog', 'pen', 'gallery'], orientation: 'portait'},
      {url: 'http://rjoypetportraits.com/images/gallery/4.jpg', tags: ['horse', 'charcoal', 'tan_paper', 'gallery'], orientation: 'landscape'},
      {url: 'http://rjoypetportraits.com/images/gallery/2.jpg', tags: ['dog', 'oil', 'gallery'], orientation: 'landscape'}
    ],
    tags: {
      gallery: true,
      cat: false,
      pencil: false,
      dog: false,
      oil: false,
      horse: false,
      charcoal: false,
      pen: false,
      white_paper: false,
      tan_paper: false,
    }
  })

  showTagHandler = (props) => {
    let previous_tags = {...this.state.tags}
    previous_tags[props] = !this.state.tags[props]
    // if (props == 'all') {
    //   Object.keys(previous_tags)
    // }
    this.setState({tags: previous_tags})
  }

  renderTagButton = (tag) => {
    return (
      <button className={this.state.tags[tag] ? 'active' : ''} onClick={this.showTagHandler.bind(this, tag)}>{tag}</button>
    )
  }

  render() {
    let image_set = null

    image_set = this.state.imgs.map((image) => {
      let tag_selected = false
      // console.log(image.tags[])
      for (let tag of image.tags) {
        if (this.state.tags[tag]) {
          tag_selected = true
        }
      }

      const tag_string = image.tags.join(', ')
      return(tag_selected ?
        <div className="image-holder" key={image.url}>
          <div class="crop-container">
            <img class={image.orientation} src={image.url} alt={image.url} />
          </div>
        </div> : null
      )
    })

    let tag_button_set = null

    console.log(Object.keys(this.state.tags))

    tag_button_set = Object.keys(this.state.tags).map((tag) => {
      return this.renderTagButton(tag)
    })

    return(
      <div className="Gallery">
        <div className="tag-button-set">
          {tag_button_set}
        </div>
        <div className="image-set">
        <ReactCSSTransitionGroup
           transitionName="example"
           transitionEnterTimeout={500}
           transitionLeaveTimeout={300}>

           {image_set}
         </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
};

export default Gallery;
