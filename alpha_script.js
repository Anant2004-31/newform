document.getElementById('entry-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Placeholder logic for incrementing counts (no backend connection)
    let allEntries = document.getElementById('all-entries').querySelector('p');
    let event1Entries = document.getElementById('event1-entries').querySelector('p');
    let event2Entries = document.getElementById('event2-entries').querySelector('p');
    let event3Entries = document.getElementById('event3-entries').querySelector('p');

    allEntries.textContent = parseInt(allEntries.textContent) + 1;
    // Simulating adding entries to specific events based on event name
    let eventName = document.getElementById('event').value.toLowerCase();
    if (eventName === 'event 1') {
        event1Entries.textContent = parseInt(event1Entries.textContent) + 1;
    } else if (eventName === 'event 2') {
        event2Entries.textContent = parseInt(event2Entries.textContent) + 1;
    } else if (eventName === 'event 3') {
        event3Entries.textContent = parseInt(event3Entries.textContent) + 1;
    }
});
