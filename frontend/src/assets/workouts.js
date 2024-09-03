const workouts = [
    {
      "id": 1,
      "name": "Morning Cardio",
      "type": "Cardio",
      "intensity": "Moderate",
      "description": "A morning cardio session to kickstart your day with some light jogging and stretching.",
      "username": "FitFan123💪",
      "exercises": [
        {
          "exerciseName": "Jogging",
          "durationMinutes": 20,
          "type": "duration"
        },
        {
          "exerciseName": "Stretching",
          "durationMinutes": 10,
          "type": "duration"
        }
      ],
      "comments": [
        { "username": "Alice", "text": "Great way to start the day! Felt energized afterward." },
        { "username": "Bob", "text": "Loved the jogging part. Stretching was a bit too long for me." },
        { "username": "Charlie", "text": "The routine was perfect for a morning workout. Well done!" },
        { "username": "Dana", "text": "I enjoyed the jog but found the stretching repetitive." },
        { "username": "Ella", "text": "Nice session to wake up and get moving. Will do again." },
        { "username": "Frank", "text": "Good for a light start. The stretching helped with my flexibility." },
        { "username": "Grace", "text": "Could use a bit more variety in exercises. Overall, good." },
        { "username": "Henry", "text": "Perfect for beginners. Not too intense but effective." },
        { "username": "Ivy", "text": "Enjoyed the session. It was a bit repetitive but refreshing." },
        { "username": "Jack", "text": "A good start to the day. The jog was the highlight for me." }
      ]
    },
    {
      "id": 2,
      "name": "Strength Training",
      "type": "Strength",
      "intensity": "High",
      "description": "A strength training workout focusing on major muscle groups with weights and resistance exercises.",
      "username": "MuscleBuilder88💪",
      "exercises": [
        {
          "exerciseName": "Bench Press",
          "sets": 3,
          "reps": 10,
          "type": "weight",
          "weight": "50kg"
        },
        {
          "exerciseName": "Squats",
          "sets": 3,
          "reps": 12,
          "type": "weight",
          "weight": "60kg"
        }
      ],
      "comments": [
        { "username": "Charlie", "text": "Intense workout! Definitely feeling the burn." },
        { "username": "Dana", "text": "Great routine, but I had to modify the reps a bit." },
        { "username": "Ella", "text": "The bench press was challenging but effective." },
        { "username": "Frank", "text": "Good strength workout. The squats were particularly tough." },
        { "username": "Grace", "text": "Overall, a solid strength workout. Need to increase weight next time." },
        { "username": "Henry", "text": "Really pushed my limits. Loved the bench press!" },
        { "username": "Ivy", "text": "The sets were intense but rewarding. Feeling strong." },
        { "username": "Jack", "text": "Squats were killer but worth it. Great routine!" },
        { "username": "Kate", "text": "Effective strength training, but I struggled with the last set of squats." },
        { "username": "Liam", "text": "Good combination of exercises. The bench press was my favorite." }
      ]
    },
    {
      "id": 3,
      "name": "Yoga Flow",
      "type": "Flexibility",
      "intensity": "Low",
      "description": "A calming yoga session to improve flexibility and relaxation with a series of poses and breathing exercises.",
      "username": "ZenMaster🧘",
      "exercises": [
        {
          "exerciseName": "Downward Dog",
          "durationMinutes": 5,
          "type": "duration"
        },
        {
          "exerciseName": "Warrior Pose",
          "durationMinutes": 5,
          "type": "duration"
        },
        {
          "exerciseName": "Tree Pose",
          "durationMinutes": 5,
          "type": "duration"
        }
      ],
      "comments": [
        { "username": "Ella", "text": "So relaxing! Perfect for winding down." },
        { "username": "Frank", "text": "The poses were gentle but effective. Loved it." },
        { "username": "Grace", "text": "A very calming session. The tree pose was challenging." },
        { "username": "Henry", "text": "Great for flexibility. The Warrior Pose was a highlight." },
        { "username": "Ivy", "text": "Felt very relaxed afterward. A great end to the day." },
        { "username": "Jack", "text": "Perfect for stretching and relaxation. Enjoyed the flow." },
        { "username": "Kate", "text": "Good yoga session, but I would have liked a bit more variety." },
        { "username": "Liam", "text": "Loved the Downward Dog. It really helped my flexibility." },
        { "username": "Mia", "text": "A soothing and effective session. Will definitely repeat." },
        { "username": "Nina", "text": "The poses were great for relaxation. Enjoyed the session." }
      ]
    },
    {
      "id": 4,
      "name": "High-Intensity Interval Training",
      "type": "HIIT",
      "intensity": "High",
      "description": "A high-intensity workout with alternating periods of intense activity and rest.",
      "username": "HIITHero🏃",
      "exercises": [
        {
          "exerciseName": "Burpees",
          "durationMinutes": 2,
          "type": "duration"
        },
        {
          "exerciseName": "Jumping Jacks",
          "durationMinutes": 2,
          "type": "duration"
        },
        {
          "exerciseName": "Rest",
          "durationMinutes": 1,
          "type": "duration"
        }
      ],
      "comments": [
        { "username": "Grace", "text": "This was a killer workout! Got my heart racing." },
        { "username": "Henry", "text": "Good mix of exercises, but the rest periods were too short." },
        { "username": "Ivy", "text": "Loved the intensity. Burpees were especially challenging." },
        { "username": "Jack", "text": "Great for a quick but intense workout. Enjoyed it." },
        { "username": "Kate", "text": "Felt like I got a full workout in a short time. Impressive." },
        { "username": "Liam", "text": "The jump rope was a nice touch. Really got my cardio going." },
        { "username": "Mia", "text": "Intense and effective. The short rest periods were tough." },
        { "username": "Nina", "text": "Good session but would prefer longer rest periods." },
        { "username": "Olivia", "text": "Fun and high-energy workout. Loved the variety of moves." },
        { "username": "Paul", "text": "Challenging but rewarding. The burpees were the hardest part." }
      ]
    },
    {
      "id": 5,
      "name": "Core Strength",
      "type": "Strength",
      "intensity": "Moderate",
      "description": "A workout focused on strengthening the core muscles with a variety of exercises.",
      "username": "CoreMaster💪",
      "exercises": [
        {
          "exerciseName": "Plank",
          "durationMinutes": 3,
          "type": "duration"
        },
        {
          "exerciseName": "Russian Twists",
          "sets": 3,
          "reps": 15,
          "type": "weight",
          "weight": "5kg"
        },
        {
          "exerciseName": "Leg Raises",
          "sets": 3,
          "reps": 12,
          "type": "weight",
          "weight": "5kg"
        }
      ],
      "comments": [
        { "username": "Ivy", "text": "Great for building core strength. Felt the burn!" },
        { "username": "Jack", "text": "Challenging but rewarding. Planks were tough." },
        { "username": "Kate", "text": "Effective routine for core. The Russian Twists were a highlight." },
        { "username": "Liam", "text": "The leg raises were particularly effective. Good workout." },
        { "username": "Mia", "text": "Good core workout. Planks were hard but beneficial." },
        { "username": "Nina", "text": "The routine was tough but I can feel the results already." },
        { "username": "Olivia", "text": "Nice variety of core exercises. Enjoyed the session." },
        { "username": "Paul", "text": "The Russian Twists were a bit too easy. Would like more weight options." },
        { "username": "Quinn", "text": "Solid core workout. Planks were the most challenging part." },
        { "username": "Riley", "text": "Good for core stability. Felt strong after the session." }
      ]
    },
    {
      "id": 6,
      "name": "Full Body Workout",
      "type": "Strength",
      "intensity": "High",
      "description": "A comprehensive workout targeting all major muscle groups for overall strength and endurance.",
      "username": "StrengthKing💪",
      "exercises": [
        {
          "exerciseName": "Deadlifts",
          "sets": 4,
          "reps": 8,
          "type": "weight",
          "weight": "80kg"
        },
        {
          "exerciseName": "Pull-Ups",
          "sets": 3,
          "reps": 10,
          "type": "weight",
          "weight": "bodyweight"
        },
        {
          "exerciseName": "Lunges",
          "sets": 3,
          "reps": 12,
          "type": "weight",
          "weight": "20kg"
        }
      ],
      "comments": [
        { "username": "Mia", "text": "Intense but great for overall strength. The deadlifts were hard!" },
        { "username": "Nina", "text": "Effective full-body workout. Pull-ups were particularly challenging." },
        { "username": "Olivia", "text": "Good variety of exercises. Felt strong afterward." },
        { "username": "Paul", "text": "The lunges were tough but worth it. Great workout overall." },
        { "username": "Quinn", "text": "Great for building strength. The deadlifts were a highlight." },
        { "username": "Riley", "text": "Challenging but rewarding. Loved the full-body approach." },
        { "username": "Sam", "text": "Tough workout but very effective. Felt great after." },
        { "username": "Taylor", "text": "Good mix of exercises for all muscle groups. Intense but good." },
        { "username": "Ursula", "text": "Really pushed my limits. The pull-ups were the toughest." },
        { "username": "Victor", "text": "Nice workout for building overall strength. Deadlifts were the best part." }
      ]
    },
    {
      "id": 7,
      "name": "Flexibility and Mobility",
      "type": "Flexibility",
      "intensity": "Low",
      "description": "A workout focusing on enhancing flexibility and mobility through various stretching and dynamic movements.",
      "username": "FlexiGuru🧘‍♂️",
      "exercises": [
        {
          "exerciseName": "Dynamic Stretching",
          "durationMinutes": 10,
          "type": "duration"
        },
        {
          "exerciseName": "Static Stretching",
          "durationMinutes": 10,
          "type": "duration"
        },
        {
          "exerciseName": "Foam Rolling",
          "durationMinutes": 10,
          "type": "duration"
        }
      ],
      "comments": [
        { "username": "Nina", "text": "Great for improving flexibility. Felt very limber afterward." },
        { "username": "Olivia", "text": "The foam rolling was a nice addition. Overall, a very relaxing session." },
        { "username": "Paul", "text": "Effective for improving range of motion. The dynamic stretching was my favorite." },
        { "username": "Quinn", "text": "Good for recovery. The static stretching was very soothing." },
        { "username": "Riley", "text": "Enjoyed the focus on flexibility. Felt great afterward." },
        { "username": "Sam", "text": "The routine was gentle but effective. Nice for recovery." },
        { "username": "Taylor", "text": "Great way to increase flexibility. The foam rolling was helpful." },
        { "username": "Ursula", "text": "Really helped with muscle soreness. Enjoyed the static stretching." },
        { "username": "Victor", "text": "Good for enhancing mobility. The dynamic stretching was especially useful." },
        { "username": "Wendy", "text": "A relaxing session. The foam rolling helped with tight muscles." }
      ]
    }
  ]
  





export default workouts;