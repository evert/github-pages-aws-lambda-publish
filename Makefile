ZIP=deploy-me.zip
FILES=config.js index.js node_modules

$(ZIP): $(FILES)
	-rm $(ZIP)
	zip -r $(ZIP) $(FILES)
