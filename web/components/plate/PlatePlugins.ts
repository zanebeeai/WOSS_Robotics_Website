import {
	createAutoformatPlugin,
	createBasicElementsPlugin,
	createBasicMarksPlugin,
	createExitBreakPlugin,
	createImagePlugin,
	createPlugins,
	createSelectOnBackspacePlugin,
	createSoftBreakPlugin,
	ELEMENT_BLOCKQUOTE,
	ELEMENT_CODE_BLOCK,
	ELEMENT_IMAGE,
	ELEMENT_MEDIA_EMBED,
	ELEMENT_PARAGRAPH,
	ELEMENT_TD,
	KEYS_HEADING,
	MARK_BOLD,
	MARK_CODE,
	MARK_ITALIC,
	MARK_STRIKETHROUGH,
	MARK_SUBSCRIPT,
	MARK_SUPERSCRIPT,
	MARK_UNDERLINE
} from '@udecode/plate';
import { autoformatPlugin } from './autoformat';
import { ParagraphElement } from './elements/paragraph';
import { BoldLeaf, ItalicLeaf, UnderlineLeaf, StrikethroughLeaf, SubscriptLeaf, SuperscriptLeaf, CodeLeaf } from './marks/basic';
import { ImageElement } from './elements/image';

export const plugins = createPlugins(
	[
		createBasicElementsPlugin(),
		createBasicMarksPlugin(),
        createImagePlugin(),
		createExitBreakPlugin({
			options: {
				rules: [
					{
						hotkey: 'mod+enter'
					},
					{
						hotkey: 'mod+shift+enter',
						before: true
					},
					{
						hotkey: 'enter',
						query: {
							start: true,
							end: true,
							allow: KEYS_HEADING
						},
						relative: true,
						level: 1
					}
				]
			}
		}),
		createSoftBreakPlugin({
			options: {
				rules: [
					{ hotkey: 'shift+enter' },
					{
						hotkey: 'enter',
						query: {
							allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD]
						}
					}
				]
			}
		}),
        createSelectOnBackspacePlugin({
            options: {
              query: {
                allow: [ELEMENT_IMAGE],
              },
            },
          }),
		createAutoformatPlugin(autoformatPlugin)
	],
	{
		components: {
			// Elements
			[ELEMENT_PARAGRAPH]: ParagraphElement,
            [ELEMENT_IMAGE]: ImageElement,

			// Marks
			[MARK_BOLD]: BoldLeaf,
			[MARK_ITALIC]: ItalicLeaf,
			[MARK_UNDERLINE]: UnderlineLeaf,
			[MARK_STRIKETHROUGH]: StrikethroughLeaf,
			[MARK_SUBSCRIPT]: SubscriptLeaf,
			[MARK_SUPERSCRIPT]: SuperscriptLeaf,
			[MARK_CODE]: CodeLeaf
		}
	}
);