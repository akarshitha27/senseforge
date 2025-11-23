export function entriesToMarkdown(entries, type, maxDescriptionLength = 300, maxEntries = 10) {
  if (!entries?.length) return "";

  // Limit entries to maxEntries
  const limitedEntries = entries.slice(0, maxEntries);

  return (
    `## ${type}\n\n` +
    limitedEntries
      .map((entry) => {
        const dateRange = entry.current
          ? `${entry.startDate} - Present`
          : `${entry.startDate} - ${entry.endDate}`;

        // Truncate description if longer than maxDescriptionLength
        let truncatedDescription = entry.description;
        if (truncatedDescription.length > maxDescriptionLength) {
          truncatedDescription = truncatedDescription.slice(0, maxDescriptionLength) + '...';
        }

        return `### ${entry.title} @ ${entry.organization}\n${dateRange}\n\n${truncatedDescription}`;
      })
      .join("\n\n")
  );
}
