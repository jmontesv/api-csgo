const groupMatchesByDate = (matches) => {
  const output = {};

  matches.forEach((match) => {
    if (match.live) {
      if (!("live" in output)) {
        output["live"] = [match];
        return;
      }
      output["live"].push(match);
      return;
    }
    const dateMatch = new Date(match.date).toLocaleDateString();
    if (!(dateMatch in output)) {
      output[dateMatch] = [match];
      return;
    }
    output[dateMatch].push(match);
  });
  return output;
};

module.exports = groupMatchesByDate;
