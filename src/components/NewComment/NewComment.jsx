// npm imports
import { useState } from "react"

// css
import styles from './NewComment.module.css'

// components
import Icon from "../Icon/Icon"

const NewComment = (props) => {
  const [formData, setFormData] = useState({text: ''})

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddComment(formData) 
    setFormData({ text: '' })
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea 
        required
        name="text"
        type="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="Add a Comment"
      />
      <button type="submit"><Icon category='Create' /></button>
    </form>
  )
}

export default NewComment