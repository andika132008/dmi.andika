const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Browser,
		C3.Plugins.Audio,
		C3.Plugins.Mouse,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Browser.Acts.Close,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Text: 0},
	{Browser: 0},
	{Audio: 0},
	{Sprite4: 0},
	{Text2: 0},
	{Text3: 0},
	{Mouse: 0},
	{Text4: 0},
	{Text5: 0},
	{Text6: 0},
	{skor: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Browser: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {},
	Text3: class extends self.ITextInstance {},
	Mouse: class extends self.IInstance {},
	Text4: class extends self.ITextInstance {},
	Text5: class extends self.ITextInstance {},
	Text6: class extends self.ITextInstance {}
}