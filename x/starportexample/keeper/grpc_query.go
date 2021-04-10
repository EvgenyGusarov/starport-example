package keeper

import (
	"github.com/EvgenyGusarov/starport-example/x/starportexample/types"
)

var _ types.QueryServer = Keeper{}
