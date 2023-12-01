
import React, { useState } from 'react';
import swData from './path/to/sw'; 
import './App.css'; 

const MovieCard = ({ movie, onLike, onDislike, onMoreClick, onMouseEnter, onMouseLeave }) => {
  const { title, year, poster, best_character } = movie;
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    setIsLiked(true);
    setIsDisliked(false);
    onLike();
  };

  const handleDislike = () => {
    setIsLiked(false);
    setIsDisliked(true);
    onDislike();
  };

  return (
    <div
      className="movie-card"
      onMouseEnter={() => onMouseEnter(best_character.affiliation)}
      onMouseLeave={onMouseLeave}
    >
      <img src={poster} alt={`${title} Poster`} />
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{year}</p>
        <button onClick={onMoreClick}>More...</button>
        <div>
          <button onClick={handleLike} disabled={isLiked}>
            Like
          </button>
          <button onClick={handleDislike} disabled={isDisliked}>
            Dislike
          </button>
        </div>
      </div>
    </div>
  );
};

const MovieDetails = ({ character, onCommentSubmit, onCloseDetails }) => {
  const { name, image, bio } = character;
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      setComments([...comments, { name: 'User', comment }]);
      setComment('');
    }
  };

  return (
    <div className="movie-details">
      <button className="close-button" onClick={onCloseDetails}>
        Close
      </button>
      <img src={image} alt={`${name} Image`} />
      <h3>{name}</h3>
      <p>{bio}</p>
      <form onSubmit={handleCommentSubmit}>
        <label htmlFor="comment">Add a comment:</label>
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={handleCommentChange}
          rows="4"
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h4>Comments:</h4>
        <ul>
          {comments.map((c, index) => (
            <li key={index}>
              <strong>{c.name}:</strong> {c.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleMoreClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleMouseEnter = (affiliation) => {
  };

  const handleMouseLeave = () => {
  };

  const handleLike = () => {
    console.log('Liked!');
  };

  const handleDislike = () => {
    console.log('Disliked!');
  };

  const handleCloseDetails = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="app">
      {swData.map((movie, index) => (
        <MovieCard
          key={index}
          movie={movie}
          onMoreClick={() => handleMoreClick(movie.best_character)}
          onMouseEnter={() => handleMouseEnter(movie.best_character.affiliation)}
          onMouseLeave={handleMouseLeave}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      ))}
      {selectedCharacter && (
        <MovieDetails
          character={selectedCharacter}
          onCloseDetails={handleCloseDetails}
        />
      )}
    </div>
  );
};

export default App;
