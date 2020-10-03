const hurricane = extendContent(ItemTurret, "hurricane", {
	turnToTarget(tile, targetRot){
		entity=tile.ent();
		entity.rotation+=0.5;
	},
	bullet(tile, type, angle){
		Bullet.create(type, tile.entity, tile.getTeam(), tile.drawx(), tile.drawy(), angle);
	}
});

hurricane.size=6;