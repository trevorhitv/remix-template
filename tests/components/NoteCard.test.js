import { test, expect } from 'bun:test';
import { screen, render } from "@testing-library/react";
import NoteCard from '../../app/components/NoteCard';

test('NoteCard Test', () => {
    const note = {
        title: 'My note',
        body: 'My note body'
    };
    render(<NoteCard note={note} />)
    expect(screen.getAllByText("My note")).toBeTruthy();
    expect(screen.getAllByText("My note body")).toBeTruthy();
});