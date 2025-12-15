import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { TextInput } from "react-native";
import { useEffect, useState } from "react";

const API_URL = "https://apicrud-bd3fa7e488da.herokuapp.com/movies";

const InputCard = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [character, setCharacter] = useState("");
  const [movies, setMovies] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchMovies = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSubmit = async () => {
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `${API_URL}/${editingId}` : API_URL;

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, genre, character }),
    });

    setTitle("");
    setGenre("");
    setCharacter("");
    setEditingId(null);
    fetchMovies();
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchMovies();
  };

  const handleEdit = (movie) => {
    setEditingId(movie._id);
    setTitle(movie.title);
    setGenre(movie.genre);
    setCharacter(movie.character);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Movie Manager</Text>

      <TextInput
        style={styles.input}
        placeholder="Movie Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Genre"
        value={genre}
        onChangeText={setGenre}
      />
      <TextInput
        style={styles.input}
        placeholder="Character"
        value={character}
        onChangeText={setCharacter}
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>
          {editingId ? "Update Movie" : "Add Movie"}
        </Text>
      </Pressable>

      <FlatList
        data={movies}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.movieTitle}>{item.title}</Text>
            <Text>{item.genre}</Text>
            <Text>{item.character}</Text>

            <View style={styles.row}>
              <Pressable onPress={() => handleEdit(item)}>
                <Text style={styles.link}>Edit</Text>
              </Pressable>
              <Pressable onPress={() => handleDelete(item._id)}>
                <Text style={styles.link}>Delete</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#005AE0",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  card: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  movieTitle: { fontWeight: "bold" },
  row: { flexDirection: "row", justifyContent: "space-between" },
  link: { color: "#005AE0", marginTop: 5 },
});

export default InputCard;


