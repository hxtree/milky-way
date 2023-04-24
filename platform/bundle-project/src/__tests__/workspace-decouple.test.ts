import fs from 'fs';
import path from 'path';
import { WorkspaceDecouple } from '../util/workspace-decouple';

describe('WorkspaceDecouple', () => {
  describe('convertFilename', () => {
    it('should replace workspace with version', async () => {
      const sourceFilepath = path.join(__dirname, '../../package.json');
      const outputFilepath = path.join(
        __dirname,
        './test-data/package-output.json',
      );

      const workspaceDecouple = new WorkspaceDecouple();
      await workspaceDecouple.convertFilename(sourceFilepath, outputFilepath);
      let result = await fs.promises.readFile(outputFilepath, 'utf-8');
      let resultJson = JSON.parse(result);

      expect(resultJson).toEqual(
        expect.objectContaining({
          name: '@cats-cradle/bundle-project',
          devDependencies: expect.objectContaining({
            '@cats-cradle/eslint-config':
              expect.not.stringContaining('workspace:*'),
          }),
        }),
      );
    });
  });

  describe('convertjson', () => {
    it('should replace workspace with version', async () => {
      const packageJson = {
        name: 'test-package',
        version: '1.0.2',
        devDependencies: {
          '@cats-cradle/eslint-config': 'workspace:*',
        },
      };
      const workspaceDecouple = new WorkspaceDecouple();
      const result = await workspaceDecouple.convertJson(packageJson);
      expect(result).toEqual(
        expect.objectContaining({
          devDependencies: {
            '@cats-cradle/eslint-config':
              expect.not.stringContaining('workspace:*'),
          },
          name: 'test-package',
          version: '1.0.2',
        }),
      );
    });
  });
});