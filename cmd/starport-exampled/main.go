package main

import (
	"os"

	"github.com/EvgenyGusarov/starport-example/app"
	"github.com/EvgenyGusarov/starport-example/cmd/starport-exampled/cmd"
	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
)

func main() {
	rootCmd, _ := cmd.NewRootCmd()
	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}
