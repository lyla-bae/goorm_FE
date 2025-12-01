// StoryTray.jsx
export default function StoryTray({ stories }) {
  let newVar = stories.slice();
  newVar.push({ id: 3, label: "Create Story" });

  return (
    <ul>
      {newVar.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
}
