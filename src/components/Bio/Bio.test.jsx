import React from 'react'
import { describe, expect, beforeEach, afterEach, it} from 'vitest';
import { screen, render, cleanup} from '@testing-library/react'


import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Bio from '.';

describe('Bio Component', () => {
    beforeEach(() => {
        render(<Bio name="Elton John" bio={"Sir Elton Hercules John CH CBE is an English singer, songwriter, pianist, and composer. He has worked with lyricist Bernie Taupin since 1967; they have collaborated on more than 30 albums. John has sold more than 300 million records, making him one of the best-selling music artists in the world."} />)
    })

    afterEach(() => {
        cleanup();
    })

    it("Displays correct title", () => {
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe('Elton John')
    })

    it("Displays correct bio", () => {
        const summary = screen.getByRole('summary');
        expect(summary).toBeInTheDocument();
        expect(summary.textContent).toBe(`Sir Elton Hercules John CH CBE is an English singer, songwriter, pianist, and composer. He has worked with lyricist Bernie Taupin since 1967; they have collaborated on more than 30 albums. John has sold more than 300 million records, making him one of the best-selling music artists in the world.`)
    })
})