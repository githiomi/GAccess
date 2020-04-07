import { GitInfoStructure } from './git-info-structure';

describe('GitInfoStructure', () => {
  it('should create an instance', () => {
    expect(new GitInfoStructure("", "")).toBeTruthy();
  });
});
