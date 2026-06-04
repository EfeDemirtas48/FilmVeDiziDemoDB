import { useState, useEffect } from 'react';
import { db } from './firebase';
import { 
  collection, 
  addDoc, 
  onSnapshot, 
  updateDoc, 
  deleteDoc, 
  doc 
} from 'firebase/firestore';

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  useEffect(() => {
    const moviesCollection = collection(db, 'movies');
    const unsubscribe = onSnapshot(moviesCollection, (snapshot) => {
      const moviesList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMovies(moviesList);
    });
    return () => unsubscribe();
  }, []);

  const handleAddMovie = async (e) => {
    e.preventDefault();
    if (!title || !genre || !releaseDate) {
      alert('Lütfen tüm alanları doldurun!');
      return;
    }
    try {
      await addDoc(collection(db, 'movies'), {
        title, genre, releaseDate, isWatched: false
      });
      setTitle(''); setGenre(''); setReleaseDate('');
    } catch (error) {
      console.error("Film eklenirken hata oluştu: ", error);
    }
  };

  const handleToggleWatched = async (id, currentStatus) => {
    try {
      const movieDoc = doc(db, 'movies', id);
      await updateDoc(movieDoc, { isWatched: !currentStatus });
    } catch (error) {
      console.error("Durum güncellenirken hata oluştu: ", error);
    }
  };

  const handleDeleteMovie = async (id) => {
    if (window.confirm('Bu filmi listenizden silmek istediğinize emin misiniz?')) {
      try {
        const movieDoc = doc(db, 'movies', id);
        await deleteDoc(movieDoc);
      } catch (error) {
        console.error("Film silinirken hata oluştu: ", error);
      }
    }
  };

  return (
    // Mobilde üstten/alttan boşluğu azalttık (py-3), masaüstünde artırdık (py-md-5)
    <div className="container py-3 py-md-5">
      
      {/* Üst Başlık */}
      <div className="text-center mb-4 mb-md-5">
        <h1 className="fw-bold text-primary fs-2 fs-md-1">🍿 Başucu Filmlerim</h1>
        <p className="text-muted small md-normal">İzlediğin ve izleyeceğin tüm yapımlar tek bir yerde.</p>
      </div>

      {/* Modern Ekleme Formu */}
      <div className="row justify-content-center mb-4 mb-md-5">
        <div className="col-12 col-lg-10">
          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-body p-3 p-md-4">
              <form onSubmit={handleAddMovie}>
                <div className="row g-3 align-items-center">
                  {/* Mobilde tam genişlik (col-12), tablette/PC'de yan yana */}
                  <div className="col-12 col-md-4">
                    <input type="text" className="form-control form-control-lg bg-light border-0" placeholder="Film/Dizi Adı" value={title} onChange={(e) => setTitle(e.target.value)} />
                  </div>
                  <div className="col-12 col-md-3">
                    <input type="text" className="form-control form-control-lg bg-light border-0" placeholder="Tür (Bilim Kurgu)" value={genre} onChange={(e) => setGenre(e.target.value)} />
                  </div>
                  <div className="col-12 col-md-3">
                    <input type="date" className="form-control form-control-lg bg-light border-0 text-muted" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
                  </div>
                  <div className="col-12 col-md-2">
                    <button type="submit" className="btn btn-primary btn-lg w-100 rounded-3 fw-bold">Ekle</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Film Kartları (Grid Yapısı) */}
      {/* Mobilde 1 (row-cols-1), Tablette 2 (row-cols-md-2), PC'de 3 kolon (row-cols-lg-3) */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {movies.map((movie) => (
          <div className="col" key={movie.id}>
            <div className={`card h-100 border-0 shadow-sm rounded-4 transition-all ${movie.isWatched ? 'bg-light opacity-75' : 'bg-white'}`}>
              <div className="card-body p-3 p-md-4">
                
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <span className="badge bg-dark rounded-pill px-3 py-2 fw-normal">
                    {movie.genre}
                  </span>
                  <small className="text-muted fw-semibold">📅 {movie.releaseDate}</small>
                </div>

                <h4 className={`fw-bold mb-3 ${movie.isWatched ? 'text-decoration-line-through text-secondary' : 'text-dark'}`}>
                  {movie.title}
                </h4>

              </div>
              
              {/* Butonların mobilde sıkışmaması için d-flex, gap-2 ve flex-wrap ekledik */}
              <div className="card-footer bg-transparent border-0 p-3 p-md-4 pt-0 d-flex flex-wrap justify-content-between align-items-center gap-2">
                <button 
                  className={`btn rounded-pill px-4 fw-semibold flex-grow-1 flex-md-grow-0 ${movie.isWatched ? 'btn-outline-secondary' : 'btn-success'}`}
                  onClick={() => handleToggleWatched(movie.id, movie.isWatched)}
                >
                  {movie.isWatched ? 'Geri Al' : '✓ İzlendi'}
                </button>
                <button 
                  className="btn btn-light text-danger rounded-circle p-2"
                  onClick={() => handleDeleteMovie(movie.id)}
                  title="Sil"
                >
                  🗑️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Boş Durum (Empty State) */}
      {movies.length === 0 && (
        <div className="text-center py-5 text-muted">
          <h3 className="fw-light fs-4 fs-md-3">Listen şu an bomboş...</h3>
          <p className="small md-normal">Hemen yukarıdan ilk filmini ekleyerek koleksiyonunu oluşturmaya başla.</p>
        </div>
      )}

    </div>
  );
}

export default App;