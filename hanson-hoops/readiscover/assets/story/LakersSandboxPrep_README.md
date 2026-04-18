Lakers sandbox prep notes

- `LakersLineups_LukaReavesTiers.csv` groups lineups into:
  - `Both`: Luka and Reaves both present
  - `One`: exactly one of Luka or Reaves present
  - `Neither`: neither present
- `LakersLineups_LukaReavesTierSummary.csv` is meant for an editorial dependency chart, especially around whether the Lakers need both Luka and Reaves on the floor for viable lineup results.
- The current Lakers on/off source in the repo is already a narrower player summary, not the full Basketball-Reference raw export with Team/Opponent/Difference sections.
- Because of that, the normalized `LakersOnOff_ByPlayer.csv` only populates the `ORtg` fields directly from the available source and leaves the other Knicks-style columns blank for now.
