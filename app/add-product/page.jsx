
export default function AddProductPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Ku dar xayeysiis</h1>

      <form style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        maxWidth: "400px"
      }}>

        <input
          type="text"
          placeholder="Magaca badeecada"
          style={{ padding: "12px" }}
        />

        <textarea
          placeholder="Faahfaahin"
          style={{ padding: "12px", height: "120px" }}
        />

        <input
          type="number"
          placeholder="Qiimaha"
          style={{ padding: "12px" }}
        />

        <button
          style={{
            padding: "14px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "10px"
          }}
        >
          Daabac
        </button>
      </form>
    </main>
  )
}
