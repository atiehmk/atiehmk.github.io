function toggleSection(sectionId) {
  const sections = document.getElementsByTagName('section');
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (section.id === sectionId) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  }
}
