export default {
  filmmakers: {
    filters: {
      specialist: {
        type: "SINGLE_PICK",
        title: "Specialist",
        values: [
          { label: "Producer", key: "producer" },
          { label: "Director", key: "director" },
          { label: "DOP", key: "dop" },
          { label: "Actor", key: "actor" },
          { label: "Script Writer", key: "script_writer" },
          { label: "Make-up Artist", key: "make_up_artist" },
          { label: "Animator", key: "animator" },
        ],
      },
      gender: {
        type: "MULTIPLE_PICK",
        title: "Gender",

        values: [
          { label: "Male", key: "male" },
          { label: "Female", key: "female" },
        ],
      },
      higher_education: {
        title: "Higher education",
        type: "SINGLE_CHECK",
      },
      experience_date: {
        type: "DATE_RANGE",
        title: "Experience",
        values: [
          {
            label: "1-10y",
            key: "1-10",
          },
          {
            label: "10-15y",
            key: "10-15",
          },
          {
            label: "15+",
            key: "15",
          },
        ],
      },
      age: {
        type: "DATE_RANGE",
        title: "Age",

        values: [
          {
            label: "18-22",
            key: "18-22",
          },
          {
            label: "22-25",
            key: "22-25",
          },
          {
            label: "25-30",
            key: "25-30",
          },
          {
            label: "30+",
            key: "30",
          },
        ],
      },
      languages: {
        type: "LANGUAGES",
        title: "Languages",
      },
    },
    specialist_filters: {
      producer: {
        specialized_in: {
          type: "SINGLE_PICK",
          title: "Specialized in",

          values: [
            { label: "Music Video", key: "Music Video" },
            { label: "Film Production", key: "Film Production" },
            { label: "Commercial Video", key: "Commercial Video" },
            { label: "Event", key: "Event" },
            { label: "Concert", key: "Concert" },
            { label: "Festival", key: "Festival" },
            { label: "Animation", key: "Animation" },
            { label: "Game", key: "Game" },
            { label: "Documentary", key: "Documentary" },
          ],
        },
      },
      director: {
        specialized_in: {
          type: "SINGLE_PICK",
          title: "Specialized in",

          values: [
            { label: "Music Video", key: "Music Video" },
            { label: "Film Production", key: "Film Production" },
            { label: "Commercial Video", key: "Commercial Video" },
            { label: "Animation", key: "Animation" },
            { label: "TV-series", key: "TV-series" },
            { label: "TV-show", key: "TV-show" },
            { label: "Documentary", key: "Documentary" },
          ],
        },
        genre: {
          type: "SINGLE_PICK",
          title: "Genre",

          values: [
            { label: "Comedy", key: "Comedy" },
            { label: "Horror", key: "Horror" },
            { label: "Thriller", key: "Thriller" },
            { label: "Romance", key: "Romance" },
            { label: "Fantasy", key: "Fantasy" },
            { label: "Drama", key: "Drama" },
            { label: "Sit-com", key: "Sit-com" },
            { label: "TV-series", key: "TV-series" },
            { label: "TV-show", key: "TV-show" },
          ],
        },
      },
      dop: {
        photo: {
          title: "Photo",
          type: "SINGLE_CHECK",
        },
        video: {
          title: "Video",
          type: "SINGLE_CHECK",
        },

        can_work_with: {
          type: "MULTIPLE_PICK",
          title: "Can work with",

          values: [
            { label: "ARRI", key: "ARRI" },
            { label: "RED", key: "RED" },
            { label: "PHANTHOM", key: "PHANTHOM" },
            { label: "DSLR", key: "DSLR" },
            { label: "SLR", key: "SLR" },
            { label: "DRONE", key: "DRONE" },
          ],
        },
        support_equipment: {
          type: "MULTIPLE_PICK",
          title: "Support equipment",

          values: [
            { label: "Gimbal", key: "Gimbal" },
            { label: "Easyrig", key: "Easyrig" },
            { label: "Stedicam", key: "Stedicam" },
            { label: "Dolly", key: "Dolly" },
            { label: "Rail", key: "Rail" },
            { label: "Shoulder Rig", key: "Shoulder Rig" },
          ],
        },
        specialized_in: {
          type: "SINGLE_PICK",
          title: "Specialized in",

          values: [
            { label: "Photoshooting", key: "Photoshooting" },
            { label: "Product shooting", key: "Product shooting" },
            { label: "Music Video", key: "Music Video" },
            { label: "Film Production", key: "Film Production" },
            { label: "Commercial Video", key: "Commercial Video" },
            { label: "TV-series", key: "TV-series" },
            { label: "TV-show", key: "TV-show" },
            { label: "Documentary", key: "Documentary" },
          ],
        },
      },

      actor: {
        age: {
          type: "DATE_RANGE",
          title: "Age",

          values: [
            {
              label: "0-2",
              key: "0-2",
            },
            {
              label: "2-4",
              key: "2-4",
            },
            {
              label: "4-7",
              key: "4-7",
            },
            {
              label: "7-11",
              key: "7-11",
            },

            {
              label: "11-15",
              key: "11-15",
            },
            {
              label: "16-20",
              key: "16-20",
            },
            {
              label: "20-25",
              key: "20-25",
            },
            {
              label: "25-30",
              key: "25-30",
            },
            {
              label: "30-40",
              key: "30-40",
            },
            {
              label: "40+",
              key: "40",
            },
            {
              label: "70+",
              key: "70",
            },
          ],
        },

        height: {
          type: "NUMBER_RANGE",
          title: "Height",

          values: [
            {
              label: "150",
              key: "1-150",
            },
            {
              label: "1.50-1.70",
              key: "150-170",
            },
            {
              label: "1.70-2",
              key: "170-200",
            },
            {
              label: "2+",
              key: "200",
            },
          ],
        },

        weight: {
          type: "NUMBER_RANGE",
          title: "Weight",

          values: [
            {
              label: "30kg",
              key: "1-30",
            },
            {
              label: "30-50kg",
              key: "30-50",
            },
            {
              label: "50-60kg",
              key: "50-60",
            },
            {
              label: "60-80kg",
              key: "60-80",
            },
            {
              label: "80+",
              key: "80",
            },
          ],
        },
        gender: {
          type: "SINGLE_PICK_WITH_NESTED",
          title: "Gender",

          values: [
            { label: "Male", key: "male" },
            { label: "Female", key: "female" },
          ],
          nesteds: {
            female: {
              breast_size: {
                title: "Breast Size",

                type: "MULTIPLE_PICK",
                values: [
                  { label: "S", key: "S" },
                  { label: "M", key: "M" },
                  { label: "L", key: "L" },
                  { label: "XL", key: "XL" },
                  { label: "XXL", key: "XXL" },
                ],
              },
              waist: {
                title: "Waist",

                type: "NUMBER_INPUT",
              },
              hips: {
                title: "Hips",

                type: "NUMBER_INPUT",
              },
              skin_tone: {
                title: "Skin tone",

                type: "COLOR_CHECKBOX",
                values: [
                  { key: "pink", color: "#ffd6c5" },
                  { key: "pale", color: "#ffe2c9" },
                  { key: "fair", color: "#ffcba3" },
                  { key: "tan", color: "#d8905f" },
                  { key: "dark", color: "#88513a" },
                ],
              },
              eye_color: {
                title: "Eye color",

                type: "COLOR_CHECKBOX",
                values: [
                  { key: "green", color: "#449e48" },
                  { key: "brown", color: "#451800" },
                  { key: "grey", color: "#8e8e8e" },
                  { key: "blue", color: "#0da2ff" },
                  {
                    key: "dichromatic",
                    color:
                      "linear-gradient(85deg, rgba(143,137,255,1) 0%, rgba(196,104,81,1) 55%, rgba(86,233,255,1) 100%)",
                  },
                ],
              },
              hair_color: {
                title: "Hair color",

                type: "MULTIPLE_PICK",
                values: [
                  { label: "Natural", key: "natural" },
                  { label: "Dyed", key: "dyed" },
                ],
              },
              hair_length: {
                title: "Hair length",

                type: "MULTIPLE_PICK",
                values: [
                  { label: "Short", key: "short" },
                  { label: "Mid", key: "mid" },
                  { label: "Long", key: "long" },
                ],
              },
              foot_size: {
                title: "Foot size",

                type: "FOOT_SIZE",
              },
            },
          },
        },
        other_details: {
          type: "MULTIPLE_PICK",
          title: "Other details",

          values: [
            { label: "tattoos", key: "tattoos" },
            { label: "moles", key: "moles" },
            { label: "freckles", key: "freckles" },
            { label: "scars", key: "scars" },
            { label: "other", key: "other" },
          ],
        },
        special_skills: {
          type: "MULTIPLE_PICK",
          title: "Special skills",

          values: [
            { label: "car driving/auto/", key: "car_driving_auto" },
            { label: "car driving/manual/", key: "car_driving_manual" },
            { label: "motorcycle", key: "motorcycle" },
            { label: "bicycle", key: "bicycle" },
            { label: "flexibility", key: "flexibility" },
            { label: "singing", key: "singing" },
            { label: "swimming", key: "swimming" },
            { label: " gun/bowl shooting", key: "gun_bowl_shooting" },
            { label: "horse riding", key: "horse_riding" },
            { label: "martial arts", key: "martial_arts" },
            { label: "sport", key: "sport" },
          ],
        },
        experience: {
          type: "MULTIPLE_PICK",
          title: "Experience",

          values: [
            { label: "Theater", key: "Theater" },
            { label: "Film", key: "Film" },
            { label: "Music Video", key: "Music Video" },
            { label: "TV-show", key: "TV-show" },
            { label: "TV-series", key: "TV-series" },
          ],
        },
        voiceover: {
          type: "SINGLE_CHECK",
          title: "Voiceover",
        },
        stunt_master: {
          type: "SINGLE_CHECK",
          title: "Stunt master",
        },
      },

      script_writer: {
        specialized_in: {
          type: "SINGLE_PICK",
          title: "Specialized in",

          values: [
            { label: "Music Video", key: "Music Video" },
            { label: "Film Production", key: "Film Production" },
            { label: "Commercial Video", key: "Commercial Video" },
            { label: "Game", key: "Game" },
            { label: "Documentary", key: "Documentary" },
          ],
        },
      },
      editor: {
        specialized_in: {
          type: "SINGLE_PICK",
          title: "Specialized in",

          values: [
            { label: "Music Video", key: "Music Video" },
            { label: "Film Production", key: "Film Production" },
            { label: "Commercial Video", key: "Commercial Video" },
            { label: "Game", key: "Game" },
            { label: "Documentary", key: "Documentary" },
          ],
        },
        programs: {
          type: "KEYWORD",
          title: "Programs",
        },
      },
      make_up_artist: {
        specialized_in: {
          type: "KEYWORD",
          title: "Specialized in",
        },
      },
      animator: {
        specialized_in: {
          type: "KEYWORD",
          title: "Specialized in",
        },
      },
    },
  },
};
