#!/bin/bash

# Script to add AnimatedBackground import to remaining pages

pages=("Notes" "Quiz" "Roadmap" "JobTracker" "ResumeAnalyzer" "StudyPlan" "CodingPractice" "TopicDetail")

for page in "${pages[@]}"; do
    file="src/pages/${page}.jsx"
    if [ -f "$file" ]; then
        # Check if AnimatedBackground is already imported
        if ! grep -q "AnimatedBackground" "$file"; then
            echo "Adding AnimatedBackground to $file"
            # This is a placeholder - actual implementation would need proper sed commands
        fi
    fi
done
